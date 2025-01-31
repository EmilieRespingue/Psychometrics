import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirection racine vers home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // Route home avec lazy loading
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.route').then((m) => m.HOME_ROUTES),
  },
  // Route info avec lazy loading
  {
    path: 'info',
    loadChildren: () =>
      import('./pages/info/info.route').then((m) => m.INFO_ROUTES),
  },
];
