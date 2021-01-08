import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from '../../../../ngx-scrolltop/src/lib/ngx-scrolltop.module';
import { DirectiveWayRoutingModule } from './directive-way-routing.module';
import { DirectiveWayComponent } from './directive-way.component';

@NgModule({
  declarations: [DirectiveWayComponent],
  imports: [CommonModule, DirectiveWayRoutingModule, NgxScrollTopModule],
})
export class DirectiveWayModule {}
