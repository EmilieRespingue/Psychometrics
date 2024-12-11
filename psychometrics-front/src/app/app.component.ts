import { Component } from '@angular/core';

import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  template: `
    <div>
      <h1>Psychometrics</h1>
      <app-hello></app-hello>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'psychometrics-front';
}
