import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpenEndedQuestionComponent } from '../../components/test-content/open-ended/open-ended.component';
import { TestContent } from '../../models/test-content';
import { TEST_CONTENT_MOCK } from '../../mocks/test-content.mock';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [OpenEndedQuestionComponent],
  template: `
    <div class="test-container">
      <!-- [question] passe la question au composant enfant -->
      <!-- (answered) écoute l'événement de réponse -->
      <app-open-ended
        [currentQuestion]="currentQuestion"
        (answered)="onAnswered($event)"
      >
      </app-open-ended>
    </div>
  `,
  styleUrl: './test.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  currentQuestion: TestContent = TEST_CONTENT_MOCK[0];

  onAnswered(answer: string): void {
    console.log('réponse reçue : ', answer);
    //logique à ajouter :
    //sauvegarder la réponse
    //afficher la prochaine question
    //navigate when finished
  }
}
