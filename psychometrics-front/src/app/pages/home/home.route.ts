import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { provideTranslocoScope } from '@jsverse/transloco';

/**
 * Home page route configuration with lazy-loaded translations
 *
 * @remarks
 * This configuration:
 * - Loads HomeComponent for empty path
 * - Provides Transloco scope for i18n
 * - Implements lazy loading for translations
 */
export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [
      /**
       * Transloco scope configuration for home page
       * Lazy loads translations from assets/i18n/home/
       * Supports 'fr' and 'en' languages
       */
      provideTranslocoScope({
        scope: 'home',
        loader: {
          // French translations
          fr: () =>
            import('../../../assets/i18n/home/fr.json').then((m) => m.default),
          // English translations
          en: () =>
            import('../../../assets/i18n/home/en.json').then((m) => m.default),
        },
      }),
    ],
    title: 'Psychometrics',
  },
];
