import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import ComponentWayComponent from './component-way.component';

const routes: Routes = [{ path: '', component: ComponentWayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentWayRoutingModule {}
