import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  Renderer2,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, throttleTime } from 'rxjs';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
  standalone: true,
  providers: [NgxScrollTopCoreService],
  host: {
    role: 'button',
    'aria-label': 'Scroll to top',
  },
})
export class NgxScrollTopDirective {
  public readonly mode = input<NgxScrollTopMode>('classic', { alias: 'ngxScrollTopMode' });

  private show = signal(false);

  private readonly el = inject(ElementRef);
  private readonly core = inject(NgxScrollTopCoreService);

  private readonly destroyRef = inject(DestroyRef);
  private readonly renderer = inject(Renderer2);

  constructor() {
    this.hideElement();
  }

  ngOnInit(): void {
    // Use throttled scroll events for better performance
    fromEvent(window, 'scroll')
      .pipe(throttleTime(100), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.handleScroll());
  }

  @HostListener('click')
  @HostListener('keydown.enter')
  public onClick(): void {
    this.scrollToTop();
  }

  private handleScroll(): void {
    const shouldShow = this.core.onWindowScroll(this.mode());

    // Only update DOM when visibility state changes
    if (this.show() !== shouldShow) {
      shouldShow ? this.showElement() : this.hideElement();
      this.show.set(shouldShow);
    }
  }

  private hideElement(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
  }

  private showElement(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', '');
  }

  private scrollToTop(): void {
    this.core.scrollToTop();
  }
}
