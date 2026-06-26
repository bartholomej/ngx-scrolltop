import { DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable()
export class NgxScrollTopCoreService {
  private scrolledFromTop = signal(false);
  private scrollOffset = signal(0);
  private readonly isBrowser: boolean = typeof window !== 'undefined';
  private alreadyActivated = signal(false);

  private document = inject(DOCUMENT);

  public onWindowScroll(mode: NgxScrollTopMode, target?: HTMLElement): boolean {
    const position: number | undefined = target
      ? target.scrollTop
      : this.document.documentElement?.scrollTop || this.document.scrollingElement?.scrollTop;
    // The threshold is the visible height of the scroll source: the target's own
    // height when scrolling a nested element, otherwise the viewport height.
    const viewport: number = target ? target.clientHeight : window.innerHeight;
    switch (mode) {
      case 'classic':
        return this.classicMode(position, viewport);
      case 'smart':
        return this.smartMode(position, viewport);
    }
  }

  private classicMode(position: number | undefined, viewport: number): boolean {
    if (this.isBrowser && position && position > viewport) {
      return true;
    } else {
      return false;
    }
  }

  private smartMode(position: number | undefined, viewport: number): boolean {
    let show = false;

    if (position === 0) {
      show = false;
      this.scrolledFromTop.set(false);
    }

    if (this.scrolledFromTop() && position && this.scrollOffset() > position) {
      show = true;
    }

    if (this.isBrowser && position && position > viewport * 2) {
      this.scrolledFromTop.set(true);
      this.scrollOffset.set(position);
    }

    return show;
  }

  public async scrollToTop(target?: HTMLElement): Promise<void> {
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
    // Scroll to the top of the target element, or the window when none is given.
    (target ?? window).scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
