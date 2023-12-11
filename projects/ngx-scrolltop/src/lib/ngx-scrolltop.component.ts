import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from '@angular/core';
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
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NgxScrollTopComponent {
  @Input() public backgroundColor: string;
  @Input() public symbolColor: string;
  @Input() public size: number;
  @Input() public position: NgxScrollTopPosition = 'right';
  @Input() public theme: NgxScrollTopTheme = 'gray';
  @Input() public mode: NgxScrollTopMode = 'classic';

  public show = signal(false);

  constructor(private core: NgxScrollTopCoreService) {}

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    const show = this.core.onWindowScroll(this.mode);

    // Performance boost. Only update the state if it has changed.
    if (this.show() !== show) {
      this.show.set(show);
    }
  }

  public scrollToTop(): void {
    this.core.scrollToTop();
  }
}
