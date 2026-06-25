import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
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
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
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

  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode());

    // Performance boost. Only update DOM when state changes.
    if (this.show() !== show) {
      this.show.set(show);
    }
  }

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
