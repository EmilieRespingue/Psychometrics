import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HelloComponent } from '../hello/hello.component';
import { HelloService } from '../hello.service';

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
