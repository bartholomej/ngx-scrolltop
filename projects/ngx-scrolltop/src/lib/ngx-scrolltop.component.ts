import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import {
  NgxScrollTopMode,
  NgxScrollTopPosition,
  NgxScrollTopTheme,
} from './ngx-scrolltop.interface';
import { listenToWindowScroll } from './ngx-scrolltop.scroll-listener';

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
    // The signal only notifies when the visibility actually changes.
    listenToWindowScroll(() => this.show.set(this.core.onWindowScroll(this.mode())));
  }

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
