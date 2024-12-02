import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hello } from './hello';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/message`);
  }
}
