import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';

@NgModule({
  declarations: [NgxScrollTopComponent, NgxScrollTopDirective],
  imports: [CommonModule],
  exports: [NgxScrollTopComponent, NgxScrollTopDirective]
})
export class NgxScrollTopModule {}
