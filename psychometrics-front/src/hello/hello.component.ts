import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  message = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService
      .getMessage()
      .subscribe((data) => (this.message = data.content));
  }
}
