import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveWayComponent } from './directive-way.component';

const routes: Routes = [{ path: '', component: DirectiveWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectiveWayRoutingModule {}
