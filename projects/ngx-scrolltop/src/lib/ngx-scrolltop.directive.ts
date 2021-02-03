import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
})
export class NgxScrollTopDirective {
  @Input('ngxScrollTopMode') public mode: NgxScrollTopMode = 'classic';

  constructor(private el: ElementRef, private core: NgxScrollTopCoreService) {
    this.hideElement();
  }

  @HostListener('window:scroll')
  public onWindowScroll() {
    if (this.core.onWindowScroll(this.mode)) {
      this.showElement();
    } else {
      this.hideElement();
    }
  }

  @HostListener('click')
  public onClick() {
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
