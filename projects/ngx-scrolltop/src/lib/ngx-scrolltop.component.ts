import { Component, HostListener, Input } from '@angular/core';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import {
  NgxScrollTopMode,
  NgxScrollTopPosition,
  NgxScrollTopTheme
} from './ngx-scrolltop.interface';

@Component({
  selector: 'ngx-scrolltop',
  templateUrl: './ngx-scrolltop.component.html',
  styleUrls: ['./ngx-scrolltop.component.scss']
})
export class NgxScrollTopComponent {
  @Input() backgroundColor: string;
  @Input() symbolColor: string;
  @Input() size: number;
  @Input() symbol: string;
  @Input() position: NgxScrollTopPosition = 'right';
  @Input() theme: NgxScrollTopTheme = 'gray';
  @Input() mode: NgxScrollTopMode = 'classic';

  public show = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.show = this.core.onWindowScroll(this.mode);
  }

  constructor(private core: NgxScrollTopCoreService) {}

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
