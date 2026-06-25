import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./component-way/component-way.component'),
  },
  {
    path: 'directive-way',
    loadComponent: () => import('./directive-way/directive-way.component'),
  },
];
