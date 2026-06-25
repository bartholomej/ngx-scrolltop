import { Directive, ElementRef, inject, input, signal } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
  providers: [NgxScrollTopCoreService],
  host: {
    '(window:scroll)': 'onWindowScroll()',
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
  }

  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode());

    // Performance boost. Only update DOM when state changes.
    if (this.show() !== show) {
      if (show) {
        this.showElement();
      } else {
        this.hideElement();
      }
      this.show.set(show);
    }
  }

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
