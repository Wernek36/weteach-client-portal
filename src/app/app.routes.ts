import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  {
    path: 'playbook/:id',
    loadComponent: () =>
      import('./pages/playbook-detail/playbook-detail.component').then(
        (m) => m.PlaybookDetailComponent,
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
