import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ComponentWayRoutingModule } from './component-way-routing.module';
import { ComponentWayComponent } from './component-way.component';

@NgModule({
  declarations: [ComponentWayComponent],
  imports: [NgxScrollTopModule, CommonModule, ComponentWayRoutingModule],
})
export class ComponentWayModule {}
