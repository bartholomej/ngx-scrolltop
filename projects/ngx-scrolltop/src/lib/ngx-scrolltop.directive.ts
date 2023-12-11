import { Directive, ElementRef, HostListener, Input, signal } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
  standalone: true,
})
export class NgxScrollTopDirective {
  @Input('ngxScrollTopMode') public mode: NgxScrollTopMode = 'classic';

  private show = signal(false);

  constructor(
    private el: ElementRef,
    private core: NgxScrollTopCoreService,
  ) {
    this.hideElement();
  }

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode);

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
