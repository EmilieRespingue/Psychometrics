// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Default redirect to Home
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  // Language-specific routes
  {
    path: ':lang',
    children: [
      // Home route (default)
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.route').then((m) => m.HOME_ROUTES), // lazy loading
        pathMatch: 'full',
      },
    ],
  },
];
