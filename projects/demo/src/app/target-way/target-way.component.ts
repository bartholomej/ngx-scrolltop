import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxScrollTopComponent } from './../../../../../projects/ngx-scrolltop/src/public-api';

@Component({
  selector: 'app-target-way',
  templateUrl: './target-way.component.html',
  styleUrls: ['./target-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxScrollTopComponent],
})
export default class TargetWayComponent {
  protected readonly messages = Array.from({ length: 50 }, (_, i) => i + 1);
}
