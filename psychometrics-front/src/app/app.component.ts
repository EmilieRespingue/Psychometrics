import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HelloComponent } from '../components/hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent, RouterModule],
  template: `
    <div>
      <h1>Psychometrics</h1>
      <router-outlet></router-outlet>
      <section>
        <app-hello></app-hello>
      </section>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Psychometrics';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
