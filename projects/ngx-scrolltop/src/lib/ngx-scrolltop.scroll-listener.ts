import { isPlatformBrowser } from '@angular/common';
import { DestroyRef, NgZone, PLATFORM_ID, afterNextRender, inject } from '@angular/core';

/**
 * Subscribes to the `scroll` event of the element returned by `getTarget` (or
 * `window` when it returns `undefined`) outside the Angular zone and invokes
 * `callback` at most once per animation frame (rAF throttle).
 *
 * The target is resolved in `afterNextRender`, once signal inputs are populated
 * (they are not yet set when the constructor runs). Must be called from an
 * injection context (e.g. a constructor). Does nothing on non-browser platforms
 * (SSR) and cleans up automatically on destroy.
 */
export function listenToScroll(
  getTarget: () => HTMLElement | undefined,
  callback: () => void,
): void {
  if (!isPlatformBrowser(inject(PLATFORM_ID))) {
    return;
  }

  const zone = inject(NgZone);
  const destroyRef = inject(DestroyRef);

  afterNextRender(() => {
    const source: HTMLElement | Window = getTarget() ?? window;

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

      source.addEventListener('scroll', handler, { passive: true });
      destroyRef.onDestroy(() => source.removeEventListener('scroll', handler));
    });
  });
}
