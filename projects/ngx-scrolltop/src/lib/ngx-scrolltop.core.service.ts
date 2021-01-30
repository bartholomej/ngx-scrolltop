import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable()
export class NgxScrollTopCoreService {
  private scrolledFromTop = false;
  private scrollOffset: number;
  private readonly isBrowser: boolean = typeof window !== 'undefined';

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
      if (
        'scrollBehavior' in document.documentElement.style || // If scrollBehaviour working
        typeof document.body.getBoundingClientRect !== 'function' // getBoundingClientRect is not defined
      ) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        this.scrollPolyfill(document.body, 2000);
      }
    }
  }

  /**
   * Scroll polyfill for browsers which not supporting `behavior: 'smooth'`. E.g. iOS.
   */
  private scrollPolyfill(el: Element, time: number) {
    const top = el.getBoundingClientRect().top / 100;
    let currentTime = 0;
    while (currentTime <= time) {
      window.setTimeout(() => window.scrollBy(0, top), currentTime, top);
      currentTime += time / 100;
    }
  }
}
