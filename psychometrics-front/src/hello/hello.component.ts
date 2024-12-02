import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent implements OnInit {
  message: string = '';

  constructor(private helloService: HelloService) {}

  ngOnInit() {
    this.helloService
      .getMessage()
      .subscribe((data) => (this.message = data.content));
  }
}
