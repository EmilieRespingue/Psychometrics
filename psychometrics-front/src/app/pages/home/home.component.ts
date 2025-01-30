import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@jsverse/transloco';

import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FooterComponent,
    HeaderComponent,
    TranslocoModule,
  ],
  template: `
    <div class="container">
      <app-header />
      <main class="main-content">
        <!-- Description Section -->
        <mat-card class="description-card mat-elevation-z2">
          <mat-card-content>{{
            'home.description' | transloco
          }}</mat-card-content>
        </mat-card>

        <!-- testCards Grid -->
        <div class="testCards-grid">
          @for (testCard of testCards; track testCard.id) {
          <mat-card
            class="testCard-card mat-elevation-z2"
            [class.clickable]="testCard.id === 1"
            (click)="testCard.id === 1 && navigateToInfo()"
          >
            <mat-card-header>
              <mat-card-title class="testCard-title">{{
                'home.testCard.title' | transloco
              }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p class="testCard-content">
                {{ 'home.testCard.testName' | transloco }}
              </p>
            </mat-card-content>
          </mat-card>
          }
        </div>

        <app-footer />
      </main>
    </div>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private router = inject(Router);

  testCards = Array(6)
    .fill(null)
    .map((_, i) => ({ id: i + 1 }));

  navigateToInfo() {
    this.router.navigate(['info']);
  }
}
