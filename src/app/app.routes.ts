import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LastviewComponent } from './pages/last-view/last-view.component';
import { NewAditionComponent } from './pages/new-addition/new-addition.component';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    // component: HomeComponent
  },
  {
    path: 'last-view',
    loadComponent: () => import('./pages/last-view/last-view.component').then(c => c.LastviewComponent),
    // component: LastviewComponent
  },
  {
    path: 'new-addition',
    loadComponent: () => import('./pages/new-addition/new-addition.component').then(c => c.NewAditionComponent),
    // component: NewAditionComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
