import { Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const INFO_ROUTES: Routes = [
  {
    path: '',
    component: InfoComponent,
    providers: [
      provideTranslocoScope({
        scope: 'info',
        loader: {
          fr: () =>
            import('../../../assets/i18n/info/fr.json').then((m) => m.default),
          en: () =>
            import('../../../assets/i18n/info/en.json').then((m) => m.default),
        },
      }),
    ],
  },
];
