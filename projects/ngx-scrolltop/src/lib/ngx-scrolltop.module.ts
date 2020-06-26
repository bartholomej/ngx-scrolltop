import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

@NgModule({
  declarations: [NgxScrollTopComponent, NgxScrollTopDirective],
  imports: [CommonModule],
  providers: [NgxScrollTopCoreService],
  exports: [NgxScrollTopComponent, NgxScrollTopDirective],
})
export class NgxScrollTopModule {}
