import { isPlatformBrowser } from '@angular/common';
import {
  DestroyRef,
  Directive,
  ElementRef,
  NgZone,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopMode } from './ngx-scrolltop.interface';

@Directive({
  selector: '[ngxScrollTop]',
  providers: [NgxScrollTopCoreService],
  host: {
    '(click)': 'onClick()',
  },
})
export class NgxScrollTopDirective {
  public mode = input<NgxScrollTopMode>('classic', { alias: 'ngxScrollTopMode' });

  private show = signal(false);

  private el = inject(ElementRef);
  private core = inject(NgxScrollTopCoreService);

  constructor() {
    this.hideElement();

    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);

    if (isPlatformBrowser(inject(PLATFORM_ID))) {
      // Listen outside Angular so scroll events don't trigger change detection.
      zone.runOutsideAngular(() => {
        let ticking = false;
        const handler = (): void => {
          if (ticking) {
            return;
          }
          ticking = true;
          requestAnimationFrame(() => {
            this.onWindowScroll();
            ticking = false;
          });
        };

        window.addEventListener('scroll', handler, { passive: true });
        destroyRef.onDestroy(() => window.removeEventListener('scroll', handler));
      });
    }
  }

  public onClick(): void {
    this.core.scrollToTop();
  }

  private onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode());

    // Performance boost. Only update DOM when state changes.
    if (this.show() !== show) {
      if (show) {
        this.showElement();
      } else {
        this.hideElement();
      }
      this.show.set(show);
    }
  }

  private hideElement(): void {
    this.el.nativeElement.style.display = 'none';
  }

  private showElement(): void {
    this.el.nativeElement.style.display = '';
  }
}
