import { DestroyRef, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { polyfill as smoothscrollPolyfill } from 'seamless-scroll-polyfill';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Injectable()
export class NgxScrollTopCoreService {
  private scrolledFromTop = signal<boolean>(false);
  private scrollOffset = signal<number>(0);
  private readonly isBrowser = typeof window !== 'undefined';
  private alreadyActivated = signal<boolean>(false);

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef, { optional: true });

  public onWindowScroll(mode: NgxScrollTopMode): boolean {
    const position = this.getScrollPosition();
    return mode === 'classic' ? this.classicMode(position) : this.smartMode(position);
  }

  private getScrollPosition(): number {
    return (
      this.document.documentElement?.scrollTop || this.document.scrollingElement?.scrollTop || 0
    );
  }

  private classicMode(position: number): boolean {
    return this.isBrowser && position > window.innerHeight;
  }

  private smartMode(position: number): boolean {
    // Reset scrolled state if at top
    if (position === 0) {
      this.scrolledFromTop.set(false);
      return false;
    }

    // Show when scrolling up after passing threshold
    if (this.scrolledFromTop() && this.scrollOffset() > position) {
      return true;
    }

    // Update scroll state when passing threshold
    if (this.isBrowser && position > window.innerHeight * 2) {
      this.scrolledFromTop.set(true);
      this.scrollOffset.set(position);
    }

    return false;
  }

  public scrollToTop(): void {
    if (!this.isBrowser) return;

    // Apply polyfill once if needed
    if (!this.alreadyActivated()) {
      smoothscrollPolyfill();
      this.alreadyActivated.set(true);
    }

    // Scroll to the top
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
