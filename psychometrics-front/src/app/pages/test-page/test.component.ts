import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { TranslocoModule } from '@jsverse/transloco';

import { OpenEndedQuestionComponent } from '../../components/test-content/open-ended/open-ended.component';
import { ClosedEndedComponent } from '../../components/test-content/closed-ended/closed-ended.component';
import { TestContent } from '../../models/test-content';
import { TEST_CONTENT_MOCK } from '../../mocks/test-content.mock';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    OpenEndedQuestionComponent,
    ClosedEndedComponent,
    MatButtonModule,
    TranslocoModule,
  ],
  template: `
    <div class="test-container">
      <section class="question-section">
        <!-- [question] passe la question au composant enfant -->
        <!-- (answered) écoute l'événement de réponse -->
        <app-open-ended
          [currentQuestion]="testContentOpenEnded"
          (answered)="onAnsweredOpen($event)"
        >
        </app-open-ended>
      </section>

      <section class="question-section">
        <app-closed-ended
          [currentQuestion]="testContentClosedEnded"
          (answered)="onAnsweredClosed($event)"
        ></app-closed-ended>
      </section>

      <div class="button-container">
        <button
          mat-raised-button
          color="primary"
          (click)="onNext()"
          [disabled]="!isValid"
        >
          {{ 'testPage.test.nextButton' | transloco }}
        </button>
      </div>
    </div>
  `,
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  //Récupération des questions depuis le mock
  testContentOpenEnded: TestContent = TEST_CONTENT_MOCK[0];
  testContentClosedEnded: TestContent = TEST_CONTENT_MOCK[1];

  openAnswer: string | null = null;
  closedAnswer: boolean | null = null;

  get isValid(): boolean {
    return this.openAnswer !== null && this.closedAnswer !== null;
  }

  onAnsweredOpen(answer: string): void {
    this.openAnswer = answer;
    console.log('Réponse à la question ouverte :', answer);
    //logique à ajouter :
    //sauvegarder la réponse
  }

  onAnsweredClosed(answer: boolean): void {
    this.closedAnswer = answer;
    console.log('Réponse à la question fermée :', answer);
  }

  onNext(): void {
    if (this.isValid) {
      console.log('Réponses soumises:', {
        openAnswer: this.openAnswer,
        closedAnswer: this.closedAnswer,
      });
      // Logique pour passer aux questions suivantes ou terminer le test
    }
  }
}
