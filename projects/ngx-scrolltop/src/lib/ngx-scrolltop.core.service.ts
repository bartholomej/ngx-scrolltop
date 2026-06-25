import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable()
export class NgxScrollTopCoreService {
  private scrolledFromTop = signal(false);
  private scrollOffset = signal(0);
  private readonly isBrowser: boolean = typeof window !== 'undefined';
  private alreadyActivated = signal(false);

  private document = inject(DOCUMENT);

  public onWindowScroll(mode: NgxScrollTopMode): boolean {
    const position: number | undefined =
      this.document.documentElement?.scrollTop || this.document.scrollingElement?.scrollTop;
    switch (mode) {
      case 'classic':
        return this.classicMode(position);
      case 'smart':
        return this.smartMode(position);
    }
  }

  private classicMode(position: number | undefined): boolean {
    if (this.isBrowser && position && position > window.innerHeight) {
      return true;
    } else {
      return false;
    }
  }

  private smartMode(position: number | undefined): boolean {
    let show = false;

    if (position === 0) {
      show = false;
      this.scrolledFromTop.set(false);
    }

    if (this.scrolledFromTop() && position && this.scrollOffset() > position) {
      show = true;
    }

    if (this.isBrowser && position && position > window.innerHeight * 2) {
      this.scrolledFromTop.set(true);
      this.scrollOffset.set(position);
    }

    return show;
  }

  public async scrollToTop(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }
    // Lazy-load the smooth-scroll polyfill (iOS Safari) only on first use, so it
    // stays out of the initial bundle. It's a no-op on browsers with native support.
    if (!this.alreadyActivated()) {
      this.alreadyActivated.set(true);
      const { polyfill } = await import('seamless-scroll-polyfill');
      polyfill();
    }
    // Scroll to the top
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
