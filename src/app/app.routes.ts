import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard'; // ❌ no borrar

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    // loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent), canActivate: [AuthGuard], // ❌ no borrar
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'last-used',
    // loadComponent: () => import('./pages/last-used/last-used.component').then(c => c.LastUsedComponent), canActivate: [AuthGuard], // ❌ no borrar
    loadComponent: () => import('./pages/last-used/last-used.component').then(c => c.LastUsedComponent),
  },
  {
    path: 'create-routine',
    // loadComponent: () => import('./pages/create-routine/create-routine.component').then(c => c.CreateRoutineComponent), canActivate: [AuthGuard], // ❌ no borrar
    loadComponent: () => import('./pages/create-routine/create-routine.component').then(c => c.CreateRoutineComponent),
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];
