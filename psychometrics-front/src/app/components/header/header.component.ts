import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="lang-buttons">
          <button class="lang-btn" (click)="switchLang('fr')">FR</button>
          <button class="lang-btn" (click)="switchLang('en')">EN</button>
        </div>

        <button mat-button class="login-btn" (click)="navigateToLogin()">
          <mat-icon>person</mat-icon>
          <span class="login-text">Se connecter /<br />S'inscrire</span>
        </button>
      </nav>
    </header>
  `,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private translocoService = inject(TranslocoService);
  private router = inject(Router);

  switchLang(lang: 'fr' | 'en') {
    this.translocoService.setActiveLang(lang);
  }

  navigateToLogin() {
    //Pour l'instant on log juste, à implémenter plus tard
    console.log('Navigation vers la page de connexion');
    //this.router.navigate(['/login]);
  }
}
