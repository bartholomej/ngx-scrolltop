import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable({
  providedIn: 'root',
})
export class NgxScrollTopCoreService {
  private scrolledFromTop = false;
  private scrollOffset: number;
  private get isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  constructor(@Inject(DOCUMENT) private document: any) {}

  public onWindowScroll(mode: NgxScrollTopMode): boolean {
    let show = false;
    const position: number = this.document.documentElement.scrollTop;
    switch (mode) {
      case 'classic':
        show = this.classicMode(position);
        break;
      case 'smart':
        show = this.smartMode(position);
        break;
    }
    return show;
  }

  private classicMode(position: number): boolean {
    let show = false;
    if (this.isBrowser && position > window.innerHeight) {
      show = true;
    } else {
      show = false;
    }
    return show;
  }

  private smartMode(position: number): boolean {
    let show = false;
    if (position === 0) {
      show = false;
      this.scrolledFromTop = false;
    }

    if (this.scrolledFromTop && this.scrollOffset > position) {
      show = true;
    }

    if (this.isBrowser && position > window.innerHeight * 2) {
      this.scrolledFromTop = true;
      this.scrollOffset = position;
    }

    return show;
  }

  public scrollToTop(): void {
    if (this.isBrowser) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }
}
