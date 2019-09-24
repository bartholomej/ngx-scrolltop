import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgxScrollTopMode } from './ngx-scrolltop.interfaces';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

@Directive({
  selector: '[ngxScrollTop]',
})
export class NgxScrollTopDirective {
  private mode: NgxScrollTopMode = 'smart';

  constructor(private el: ElementRef, private core: NgxScrollTopCoreService) {
    this.hideElement();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.core.onWindowScroll(this.mode)) {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  @HostListener('click', ['$event.target'])
  onClick() {
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
