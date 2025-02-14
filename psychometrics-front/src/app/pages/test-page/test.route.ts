import { Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { provideTranslocoScope } from '@jsverse/transloco';

export const TEST_ROUTES: Routes = [
  {
    path: '',
    component: TestComponent,
    providers: [
      provideTranslocoScope({
        scope: 'testPage',
        loader: {
          fr: () =>
            import('../../../assets/i18n/testPage/fr.json').then(
              (m) => m.default
            ),
          en: () =>
            import('../../../assets/i18n/testPage/en.json').then(
              (m) => m.default
            ),
        },
      }),
    ],
  },
];
