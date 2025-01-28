import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      provideTranslocoScope({
        scope: 'home',
        loader: {
          fr: () =>
            import('../../../assets/i18n/home/fr.json').then((m) => m.default),
          en: () =>
            import('../../../assets/i18n/home/en.json').then((m) => m.default),
        },
      }),
    ],
    title: 'Psychometrics',
  },
];
