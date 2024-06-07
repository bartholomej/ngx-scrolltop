import { Directive, ElementRef, HostListener, inject, input, signal } from '@angular/core';
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

  private el = inject(ElementRef);
  private core = inject(NgxScrollTopCoreService);

  constructor() {
    this.hideElement();
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode());

    // Performance boost. Only update the DOM when the state changes.
    if (this.show() !== show) {
      show ? this.showElement() : this.hideElement();
      this.show.set(show);
    }
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
