import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent } from '../../components/footer/footer.component';
import { HomePageContent } from '../../models/home-page-content';

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
        <mat-card-content>{{
          homeContent()?.home?.description
        }}</mat-card-content>
      </mat-card>

      <!-- testCards Grid -->
      <div class="testCards-grid">
        @for (testCard of testCards(); track testCard.id) {
        <mat-card class="testCard-card mat-elevation-z2">
          <mat-card-header>
            <mat-card-title class="testCard-title">{{
              testCard.title
            }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p class="testCard-content">{{ testCard.testName }}</p>
          </mat-card-content>
        </mat-card>
        }
      </div>

      <app-footer />
    </main>
  `,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private http = inject(HttpClient);
  public homeContent = signal<HomePageContent | null>(null);

  testCards = computed(() => {
    const content = this.homeContent();
    if (!content) return [];

    return Array(6)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        title: content.home.testCard.title,
        testName: content.home.testCard.testName,
      }));
  });

  constructor() {
    this.http
      .get<HomePageContent>('assets/content/pages/homepage.json')
      .subscribe((content) => this.homeContent.set(content));
  }
}
