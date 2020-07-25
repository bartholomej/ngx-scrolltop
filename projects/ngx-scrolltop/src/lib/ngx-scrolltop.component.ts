import { Component, HostListener, Input } from '@angular/core';
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
})
export class NgxScrollTopComponent {
  @Input() public backgroundColor: string;
  @Input() public symbolColor: string;
  @Input() public size: number;
  @Input() public set symbol(value: string) {
    console.error(
      'NgxScrollTop: Symbol input `[symbol]="\'↑\'"` is deprecated.\n\r Use `Content projection` instead. E.g. <ngx-scrolltop>↑</ngx-scrolltop>.\n\r More info: https://github.com/bartholomej/ngx-scrolltop#symbol'
    );
  }
  @Input() public position: NgxScrollTopPosition = 'right';
  @Input() public theme: NgxScrollTopTheme = 'gray';
  @Input() private mode: NgxScrollTopMode = 'classic';

  public show = false;

  @HostListener('window:scroll')
  public onWindowScroll() {
    this.show = this.core.onWindowScroll(this.mode);
  }

  constructor(private core: NgxScrollTopCoreService) {}

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
