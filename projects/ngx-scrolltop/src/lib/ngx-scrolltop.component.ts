import {
  Component,
  OnInit,
  ViewChild,
  HostListener,
  Inject,
  ElementRef,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  NgxScrollTopMode,
  NgxScrollTopTheme,
  NgxScrollTopPosition,
} from './ngx-scrolltop.interfaces';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

@Component({
  selector: 'ngx-scrolltop',
  templateUrl: './ngx-scrolltop.component.html',
  styleUrls: ['./ngx-scrolltop.component.scss'],
})
export class NgxScrollTopComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() symbolColor: string;
  @Input() size: number;
  @Input() symbol: string;
  @Input() position: NgxScrollTopPosition = 'right';
  @Input() theme: NgxScrollTopTheme = 'gray';
  @Input() mode: NgxScrollTopMode = 'classic';

  public show = false;

  @ViewChild('scrollTopButton', { static: false }) scrollTopButton: ElementRef;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.show = this.core.onWindowScroll(this.mode);
  }

  constructor(private core: NgxScrollTopCoreService) {}

  ngOnInit() {}

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
