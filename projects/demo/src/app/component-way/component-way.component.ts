import { Component } from '@angular/core';
import { NgxScrollTopComponent } from 'projects/ngx-scrolltop/src/public-api';

@Component({
  selector: 'app-component-way',
  templateUrl: './component-way.component.html',
  styleUrls: ['./component-way.component.scss'],
  standalone: true,
  imports: [NgxScrollTopComponent],
})
export default class ComponentWayComponent {}
