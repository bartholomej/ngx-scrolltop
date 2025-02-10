import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import {
  NgxScrollTopMode,
  NgxScrollTopPosition,
  NgxScrollTopTheme,
} from './ngx-scrolltop.interface';

@Component({
  selector: 'ngx-scrolltop',
  templateUrl: './ngx-scrolltop.component.html',
  styleUrls: ['./ngx-scrolltop.component.scss'],
  imports: [NgClass],
  providers: [NgxScrollTopCoreService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NgxScrollTopComponent {
  public readonly backgroundColor = input<string>();
  public readonly symbolColor = input<string>();
  public readonly size = input<number>();
  public readonly position = input<NgxScrollTopPosition>('right');
  public readonly theme = input<NgxScrollTopTheme>('gray');
  public readonly mode = input<NgxScrollTopMode>('classic');

  private readonly destroyRef = inject(DestroyRef);
  private readonly core = inject(NgxScrollTopCoreService);

  public readonly show = signal(false);

  constructor() {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        debounceTime(50),
        map(() => typeof window !== 'undefined' && window.scrollY),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((pos) => {
        requestAnimationFrame(() => {
          const show = this.core.onWindowScroll(this.mode());
          // Performance boost. Only update the state if it has changed.
          if (this.show() !== show) {
            this.show.set(show);
          }
        });
      });
  }

  public scrollToTop(): void {
    requestAnimationFrame(() => this.core.scrollToTop());
  }
}
