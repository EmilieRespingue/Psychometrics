import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <div class="info-container">
      <p>{{ 'info.info' | transloco }}</p>
    </div>
  `,
  styleUrl: './info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {}
