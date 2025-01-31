import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    TranslocoModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
  ],
  template: `
    <div class="info-container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>{{ 'info.info' | transloco }}</mat-card-title>
        </mat-card-header>

        <mat-card-content>
          <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
            <div class="radio-section">
              <mat-label class="radio-label required">
                {{ 'info.gender.question' | transloco }}
              </mat-label>

              <mat-radio-group formControlName="gender" class="radio-group">
                <mat-radio-button value="option1">{{
                  'info.gender.male' | transloco
                }}</mat-radio-button>
                <mat-radio-button value="option2">{{
                  'info.gender.female' | transloco
                }}</mat-radio-button>
                <mat-radio-button value="option3">{{
                  'info.gender.other' | transloco
                }}</mat-radio-button>
              </mat-radio-group>

              @if (userForm.get('gender')?.touched &&
              userForm.get('gender')?.hasError('required')) {
              <mat-error>{{ 'info.formField.required' | transloco }}</mat-error>
              }
            </div>

            <mat-form-field appearance="outline">
              <mat-label>{{
                'info.formField.firstName' | transloco
              }}</mat-label>
              <input matInput formControlName="firstName" required />
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>{{ 'info.formField.age' | transloco }}</mat-label>
              <input
                matInput
                type="number"
                formControlName="age"
                required
                min="8"
                max="99"
              />
              @if (userForm.get('age')?.hasError('required') &&
              userForm.get('age')?.touched) {
              <mat-error>{{
                'info.formField.ageRequired' | transloco
              }}</mat-error>
              } @if (userForm.get('age')?.hasError('min') ||
              userForm.get('age')?.hasError('max')) {
              <mat-error>{{
                'info.formField.ageInvalid' | transloco
              }}</mat-error>
              }
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>{{ 'info.formField.email' | transloco }}</mat-label>
              <input matInput formControlName="email" type="email" required />
              @if (userForm.get('email')?.hasError('email')) {
              <mat-error>
                {{ 'info.formField.emailInvalid' | transloco }}
              </mat-error>
              }
            </mat-form-field>

            <button
              mat-raised-button
              color="primary"
              type="submit"
              [disabled]="!userForm.valid"
            >
              {{ 'info.formField.button' | transloco }}
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrl: './info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      gender: ['', Validators.required],
      firstName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(8), Validators.max(99)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Ici on met la logique pour envoyer les données en back
    }
  }
}
