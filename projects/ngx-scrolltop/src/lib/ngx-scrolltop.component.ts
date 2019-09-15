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

@Component({
  selector: 'ngx-scrolltop',
  templateUrl: './ngx-scrolltop.component.html',
  styleUrls: ['./ngx-scrolltop.component.scss'],
})
export class NgxScrolltopComponent implements OnInit {
  @Input() backgroundColor: string;
  @Input() symbolColor: string;
  @Input() size: number;
  @Input() symbol: string;

  public show = false;
  private scrolledFromTop = false;
  private scrollOffset: number;

  @ViewChild('scrollTopButton', { static: false }) scrollTopButton: ElementRef;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.document.documentElement.scrollTop === 0) {
      this.show = false;
      this.scrolledFromTop = false;
    }

    if (
      this.scrolledFromTop &&
      this.scrollOffset > this.document.documentElement.scrollTop
    ) {
      this.show = true;
    }

    if (
      typeof window !== 'undefined' &&
      this.document.documentElement.scrollTop > window.innerHeight * 2
    ) {
      this.scrolledFromTop = true;
      this.scrollOffset = this.document.documentElement.scrollTop;
    }
  }

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {}

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  }
}
