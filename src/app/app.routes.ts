import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    // component: HomeComponent
  },
  {
    path: 'last-used',
    loadComponent: () => import('./pages/last-used/last-used.component').then(c => c.LastUsedComponent),
    // component: LastviewComponent
  },
  {
    path: 'create-routine',
    loadComponent: () => import('./pages/create-routine/create-routine.component').then(c => c.CreateRoutineComponent),
    // component: NewAditionComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
