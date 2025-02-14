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

import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TranslocoModule } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

import { TestContent } from '../../../models/test-content';

@Component({
  selector: 'app-closed-ended',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    TranslocoModule,
  ],
  template: `
    <div class="question-container">
      <p class="question-text">{{ currentQuestion.textFr }}</p>

      <form [formGroup]="answerForm" (ngSubmit)="onSubmit()">
        <div class="radio-group">
          <mat-radio-group formControlName="answer" class="answer-options">
            <mat-radio-button value="true">Oui</mat-radio-button>
            <mat-radio-button value="false">Non</mat-radio-button>
          </mat-radio-group>

          @if (answerForm.get('answer')?.hasError('required') &&
          answerForm.get('answer')?.touched) {
          <mat-error>Une réponse est requise</mat-error>
          }
        </div>
      </form>
    </div>
  `,
  styleUrl: './closed-ended.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClosedEndedComponent {
  @Input({ required: true }) currentQuestion!: TestContent;
  @Output() answered = new EventEmitter<boolean>();

  answerForm: FormGroup;
  private valueSubscription?: Subscription;

  constructor(private fb: FormBuilder) {
    this.answerForm = this.fb.group({
      answer: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.valueSubscription = this.answerForm
      .get('answer')
      ?.valueChanges.subscribe((value) => {
        if (value !== null) {
          this.answered.emit(value === 'true');
        }
      });
  }

  ngOnDestroy(): void {
    this.valueSubscription?.unsubscribe();
  }

  onSubmit() {
    if (this.answerForm.valid) {
      this.answered.emit(this.answerForm.value.answer === 'true');
      //this.answerForm.reset();
    }
  }
}
