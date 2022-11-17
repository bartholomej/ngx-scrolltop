import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./component-way/component-way.module').then((m) => m.ComponentWayModule),
  },
  {
    path: 'directive-way',
    loadChildren: () =>
      import('./directive-way/directive-way.module').then((m) => m.DirectiveWayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
