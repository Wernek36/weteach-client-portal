import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

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
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'playbook/:id',
        loadComponent: () =>
          import('./pages/playbook-detail/playbook-detail.component').then(
            (m) => m.PlaybookDetailComponent,
          ),
      },
      {
        path: 'playbook/:id/module/:slug',
        loadComponent: () =>
          import('./pages/module-detail/module-detail.component').then(
            (m) => m.ModuleDetailComponent,
          ),
      },
      {
        path: 'news',
        loadComponent: () =>
          import('./pages/news/news.component').then((m) => m.NewsComponent),
      },
      {
        path: 'community',
        loadComponent: () =>
          import('./pages/community/community.component').then((m) => m.CommunityComponent),
      },
      {
        path: 'leaderboard',
        loadComponent: () =>
          import('./pages/leaderboard/leaderboard.component').then((m) => m.LeaderboardComponent),
      },
      {
        path: 'twin',
        loadComponent: () =>
          import('./pages/twin/twin.component').then((m) => m.TwinComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
