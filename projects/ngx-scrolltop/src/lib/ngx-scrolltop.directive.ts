import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
  standalone: true,
  providers: [NgxScrollTopCoreService],
})
export class NgxScrollTopDirective {
  public mode = input<NgxScrollTopMode>('classic', { alias: 'ngxScrollTopMode' });

  private show = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  private el = inject(ElementRef);
  private core = inject(NgxScrollTopCoreService);

  constructor() {
    this.hideElement();

    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        debounceTime(50),
        map(() => typeof window !== 'undefined' && window.scrollY),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((pos) => {
        requestAnimationFrame(() => {
          const show = this.core.onWindowScroll(this.mode());
          // Performance boost. Only update the state if it has changed.
          if (this.show() !== show) {
            show ? this.showElement() : this.hideElement();
            this.show.set(show);
          }
        });
      });
  }

  @HostListener('click')
  public onClick(): void {
    this.scrollToTop();
  }

  private hideElement(): void {
    this.el.nativeElement.style.display = 'none';
  }

  private showElement(): void {
    this.el.nativeElement.style.display = '';
  }

  private scrollToTop(): void {
    this.core.scrollToTop();
  }
}
