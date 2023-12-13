import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';

@NgModule({
  imports: [CommonModule, NgxScrollTopComponent, NgxScrollTopDirective],
  providers: [NgxScrollTopCoreService],
  exports: [NgxScrollTopComponent, NgxScrollTopDirective],
})
export class NgxScrollTopModule { }
