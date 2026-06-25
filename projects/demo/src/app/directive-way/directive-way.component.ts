import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxScrollTopDirective } from './../../../../../projects/ngx-scrolltop/src/public-api';

@Component({
  selector: 'app-directive-way',
  templateUrl: './directive-way.component.html',
  styleUrls: ['./directive-way.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgxScrollTopDirective],
})
export default class DirectiveWayComponent {}
