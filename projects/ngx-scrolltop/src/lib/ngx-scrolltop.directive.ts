import { Directive, ElementRef, computed, inject, input, signal } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';
import { listenToScroll } from './ngx-scrolltop.scroll-listener';

@Directive({
  selector: '[ngxScrollTop]',
  providers: [NgxScrollTopCoreService],
  host: {
    '(click)': 'onClick()',
  },
})
export class NgxScrollTopDirective {
  public mode = input<NgxScrollTopMode>('classic', { alias: 'ngxScrollTopMode' });

  /**
   * Optional nested scroll container to track instead of the window. Accepts a
   * template reference (`#myDiv`), an `HTMLElement`, or an `ElementRef`. When
   * omitted, the directive falls back to the window scroll.
   */
  public target = input<HTMLElement | ElementRef<HTMLElement>>(undefined, {
    alias: 'ngxScrollTopTarget',
  });

  private show = signal(false);

  private el = inject(ElementRef);
  private core = inject(NgxScrollTopCoreService);

  private readonly targetElement = computed<HTMLElement | undefined>(() => {
    const target = this.target();
    return target instanceof ElementRef ? target.nativeElement : target;
  });

  constructor() {
    this.hideElement();

    listenToScroll(
      () => this.targetElement(),
      () => this.onWindowScroll(),
    );
  }

  public onClick(): void {
    this.core.scrollToTop(this.targetElement());
  }

  private onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode(), this.targetElement());

    // Performance boost. Only touch the DOM when state changes.
    if (this.show() !== show) {
      if (show) {
        this.showElement();
      } else {
        this.hideElement();
      }
      this.show.set(show);
    }
  }

  private hideElement(): void {
    this.el.nativeElement.style.display = 'none';
  }

  private showElement(): void {
    this.el.nativeElement.style.display = '';
  }
}
