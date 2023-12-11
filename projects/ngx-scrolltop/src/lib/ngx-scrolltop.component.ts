import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
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
  styleUrls: ['./ngx-scrolltop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxScrollTopComponent implements OnChanges {
  @Input() public backgroundColor: string;
  @Input() public symbolColor: string;
  @Input() public size: number;
  @Input() public symbol: string;
  @Input() public position: NgxScrollTopPosition = 'right';
  @Input() public theme: NgxScrollTopTheme = 'gray';
  @Input() public mode: NgxScrollTopMode = 'classic';

  public show = false;

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode);

    // Performance boost. Only update the state if it has changed.
    if (this.show !== show) {
      this.show = show;
      this.cdr.markForCheck();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Deprecation warning. It will be removed soon.
    if (changes.symbol) {
      console.error(
        `NgxScrollTop: You are trying to set \`${changes['symbol'].currentValue}\` as your symbol but Input \`[symbol]="'↑'"\` is deprecated now.\n\r`,
        `Use \`Content projection\` method, like this:\n\r\n\r`,
        `<ngx-scrolltop>${changes['symbol'].currentValue}</ngx-scrolltop>\n\r\n\r`,
        `More info: https://github.com/bartholomej/ngx-scrolltop#symbol`,
      );
    }
  }

  constructor(
    private core: NgxScrollTopCoreService,
    private cdr: ChangeDetectorRef,
  ) {}

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
