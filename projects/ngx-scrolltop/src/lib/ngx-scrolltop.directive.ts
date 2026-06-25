import { Directive, ElementRef, inject, input, signal } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';
import { listenToWindowScroll } from './ngx-scrolltop.scroll-listener';

@Directive({
  selector: '[ngxScrollTop]',
  providers: [NgxScrollTopCoreService],
  host: {
    '(click)': 'onClick()',
  },
})
export class NgxScrollTopDirective {
  public mode = input<NgxScrollTopMode>('classic', { alias: 'ngxScrollTopMode' });

  private show = signal(false);

  private el = inject(ElementRef);
  private core = inject(NgxScrollTopCoreService);

  constructor() {
    this.hideElement();

    listenToWindowScroll(() => this.onWindowScroll());
  }

  public onClick(): void {
    this.core.scrollToTop();
  }

  private onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode());

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
