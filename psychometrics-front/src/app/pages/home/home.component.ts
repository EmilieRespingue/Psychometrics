import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

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
  ],
  template: `
    <main class="main-content">
      <!-- Description Section -->
      <mat-card class="description-card mat-elevation-z2">
        <mat-card-content>
          Lorem ipsum dolor sit amet consectetur. Amet dictum sed augue velit
          sem. Id in varius duis vivamus sit eras. Id nullam malesuada sapien
          nisi elit ut dignissim enim. Condimentum eleifend ultricies duis
          cursus quisque enim lacus.
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
