import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'fr',
    pathMatch: 'full',
  },
  {
    path: ':lang',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Psychometrics - Home',
      },
    ],
  },
];
