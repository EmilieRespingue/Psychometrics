import { Component, OnInit } from '@angular/core';
import { HelloService } from '../../services/hello.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  template: ` <div>
    <h2>Backend Message:</h2>
    <p>{{ message }}</p>
    <p>{{ message2 }}</p>
  </div>`,
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  message = '';
  message2 = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService
      .getMessage()
      .subscribe((data) => (this.message = data.content));

    this.helloService
      .getHello()
      .subscribe((data) => (this.message2 = data.content));
  }
}
