import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
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
import { listenToScroll } from './ngx-scrolltop.scroll-listener';

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

  /**
   * Optional nested scroll container to track instead of the window. Accepts a
   * template reference (`#myDiv`), an `HTMLElement`, or an `ElementRef`. When
   * omitted, the component falls back to the window scroll.
   */
  public target = input<HTMLElement | ElementRef<HTMLElement>>();

  public show = signal(false);

  private readonly core = inject(NgxScrollTopCoreService);

  private readonly targetElement = computed<HTMLElement | undefined>(() => {
    const target = this.target();
    return target instanceof ElementRef ? target.nativeElement : target;
  });

  constructor() {
    // The signal only notifies when the visibility actually changes.
    listenToScroll(
      () => this.targetElement(),
      () => this.show.set(this.core.onWindowScroll(this.mode(), this.targetElement())),
    );
  }

  public scrollToTop(): void {
    this.core.scrollToTop(this.targetElement());
  }
}
