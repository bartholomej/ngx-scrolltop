import { NgModule } from '@angular/core';
import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';

const COMPONENTS = [NgxScrollTopComponent, NgxScrollTopDirective];

@NgModule({
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NgxScrollTopModule {}
