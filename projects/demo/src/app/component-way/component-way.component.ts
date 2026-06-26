import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxScrollTopComponent } from './../../../../../projects/ngx-scrolltop/src/public-api';

@Component({
  selector: 'app-component-way',
  templateUrl: './component-way.component.html',
  styleUrls: ['./component-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxScrollTopComponent],
})
export default class ComponentWayComponent {
  protected readonly items = Array.from({ length: 50 }, (_, i) => i + 1);
}
