import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  NgZone,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import {
  NgxScrollTopMode,
  NgxScrollTopPosition,
  NgxScrollTopTheme,
} from './ngx-scrolltop.interface';

@Component({
  selector: 'ngx-scrolltop',
  templateUrl: './ngx-scrolltop.component.html',
  styleUrl: './ngx-scrolltop.component.scss',
  providers: [NgxScrollTopCoreService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxScrollTopComponent {
  public backgroundColor = input<string>();
  public symbolColor = input<string>();
  public size = input<number>();
  public position = input<NgxScrollTopPosition>('right');
  public theme = input<NgxScrollTopTheme>('gray');
  public mode = input<NgxScrollTopMode>('classic');

  public show = signal(false);

  private readonly core = inject(NgxScrollTopCoreService);

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      // Listen outside Angular so scroll events don't trigger change detection.
      // The signal only notifies when the visibility actually changes.
      zone.runOutsideAngular(() => {
        let ticking = false;
        const handler = (): void => {
          if (ticking) {
            return;
          }
          ticking = true;
          requestAnimationFrame(() => {
            const show = this.core.onWindowScroll(this.mode());
            if (this.show() !== show) {
              this.show.set(show);
            }
            ticking = false;
          });
        };

        window.addEventListener('scroll', handler, { passive: true });
        destroyRef.onDestroy(() => window.removeEventListener('scroll', handler));
      });
    }
  }

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
