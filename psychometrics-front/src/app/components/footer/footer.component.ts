import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <footer>
      <div class="footer-links">
        <a mat-button class="footer-link">Conditions générales d'utilisation</a>
        <a mat-button class="footer-link">Charte des données personnelles</a>
        <a mat-button class="footer-link">Mentions légales</a>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
