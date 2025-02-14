import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslocoModule } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

import { TestContent } from '../../../models/test-content';

@Component({
  selector: 'app-open-ended',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TranslocoModule,
  ],
  template: `
    <!-- Conteneur principal -->
    <div class="question-container">
      <p class="question-text">{{ currentQuestion.textFr }}</p>

      <form [formGroup]="answerForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline" class="answer-field">
          <textarea
            matInput
            formControlName="answer"
            rows="4"
            placeholder="Votre réponse..."
            required
          ></textarea>

          <!-- Message d'erreur conditionnel -->
          @if (answerForm.get('answer')?.hasError('required') &&
          answerForm.get('answer')?.touched) {
          <mat-error>Une réponse est requise</mat-error>
          }
        </mat-form-field>
      </form>
    </div>
  `,
  styleUrl: './open-ended.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenEndedQuestionComponent {
  @Input({ required: true }) currentQuestion!: TestContent;
  @Output() answered = new EventEmitter<string>();

  answerForm: FormGroup;
  private valueSubscription?: Subscription;

  constructor(private fb: FormBuilder) {
    this.answerForm = this.fb.group({
      answer: ['', Validators.required], //validation à la création
    });
  }

  ngOnInit(): void {
    this.valueSubscription = this.answerForm
      .get('answer')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          this.answered.emit(value);
        }
      });
  }

  ngOnDestroy(): void {
    this.valueSubscription?.unsubscribe();
  }

  onSubmit() {
    if (this.answerForm.valid) {
      this.answered.emit(this.answerForm.value.answer);
      //this.answerForm.reset();
    }
  }
}
