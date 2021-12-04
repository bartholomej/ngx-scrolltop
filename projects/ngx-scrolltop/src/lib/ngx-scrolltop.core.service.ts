import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { polyfill as smoothscrollPolyfill } from 'smoothscroll-polyfill';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable()
export class NgxScrollTopCoreService {
  private scrolledFromTop = false;
  private scrollOffset: number;
  private readonly isBrowser: boolean = typeof window !== 'undefined';
  private alreadyActivated: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) {}

  public onWindowScroll(mode: NgxScrollTopMode): boolean {
    const position: number =
      this.document.documentElement?.scrollTop || this.document.scrollingElement?.scrollTop;
    switch (mode) {
      case 'classic':
        return this.classicMode(position);
      case 'smart':
        return this.smartMode(position);
    }
  }

  private classicMode(position: number): boolean {
    if (this.isBrowser && position > window.innerHeight) {
      return true;
    } else {
      return false;
    }
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
      // Kick off the polyfill for iOS Safari
      if (!this.alreadyActivated) {
        smoothscrollPolyfill();
        this.alreadyActivated = true;
      }
      // Scroll to the top
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }
}
