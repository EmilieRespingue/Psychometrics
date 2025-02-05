import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TranslocoModule,
  ],
  template: `
    <header class="header">
      <nav class="nav">
        <!-- Site Title -->
        <div class="app-title">
          <h1>Psychometrics</h1>
        </div>
        <!-- Language Menu -->
        <button
          mat-button
          [matMenuTriggerFor]="languageMenu"
          class="lang-select-btn"
        >
          <span class="lang-label">{{ currentLang | uppercase }}</span>
          <mat-icon>arrow_drop_down</mat-icon>
        </button>
        <mat-menu #languageMenu="matMenu">
          <button mat-menu-item (click)="switchLang('fr')">
            <span>Français</span>
          </button>
          <button mat-menu-item (click)="switchLang('en')">
            <span>Anglais</span>
          </button>
        </mat-menu>

        <!-- Login Button -->
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

  currentLang = 'fr';

  switchLang(lang: 'fr' | 'en') {
    this.currentLang = lang;
    this.translocoService.setActiveLang(lang);
  }

  navigateToLogin() {
    //Pour l'instant on log juste, à implémenter plus tard
    console.log('Navigation vers la page de connexion');
    //this.router.navigate(['/login]);
  }
}
