import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';

import { FooterComponent } from '../../components/footer/footer.component';

interface Domain {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FooterComponent,
	TranslocoModule,
  ],
  template: `
    <main class="main-content">
      <!-- Description Section -->
      <mat-card class="description-card mat-elevation-z2">
        <mat-card-content>
          {{ 'yeah' | transloco }}
        </mat-card-content>
      </mat-card>

      <!-- Domains Grid -->
      <div class="domains-grid">
        @for (domain of domains; track domain.id) {
        <mat-card class="domain-card mat-elevation-z2">
          <mat-card-header>
            <mat-card-title class="domain-title">DOMAINE</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p class="domain-content">{{ domain.name }}</p>
          </mat-card-content>
        </mat-card>
        }
      </div>

      <app-footer></app-footer>
    </main>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  domains: Domain[] = [
    { id: 1, name: 'Nom du test / outil' },
    { id: 2, name: 'Nom du test / outil' },
    { id: 3, name: 'Nom du test / outil' },
    { id: 4, name: 'Nom du test / outil' },
    { id: 5, name: 'Nom du test / outil' },
    { id: 6, name: 'Nom du test / outil' },
  ];
}
