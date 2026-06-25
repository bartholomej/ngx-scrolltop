import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, NgZone, PLATFORM_ID, inject } from '@angular/core';

/**
 * Subscribes to the window `scroll` event outside the Angular zone and invokes
 * `callback` at most once per animation frame (rAF throttle).
 *
 * Must be called from an injection context (e.g. a constructor). Does nothing on
 * non-browser platforms (SSR) and cleans up automatically on destroy.
 */
export function listenToWindowScroll(callback: () => void): void {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) {
    return;
  }

  const zone = inject(NgZone);
  const destroyRef = inject(DestroyRef);

  // Listen outside Angular so scroll events don't trigger change detection.
  zone.runOutsideAngular(() => {
    let ticking = false;
    const handler = (): void => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
    };

    window.addEventListener('scroll', handler, { passive: true });
    destroyRef.onDestroy(() => window.removeEventListener('scroll', handler));
  });
}
