import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Psychometrics',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/fr',
    pathMatch: 'full',
  },
];
