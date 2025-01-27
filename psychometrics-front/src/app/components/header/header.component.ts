import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <nav class="nav">
        <button class="lang-btn" (click)="switchLang('fr')">FR</button>
        <button class="lang-btn" (click)="switchLang('en')">EN</button>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private translocoService = inject(TranslocoService);

  switchLang(lang: 'fr' | 'en') {
    this.translocoService.setActiveLang(lang);
  }
}
