import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hello } from '../models/hello';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<Hello> {
    return this.http.get<Hello>(`${this.apiUrl}/message`);
  }

  getHello(): Observable<Hello> {
    return this.http.get<Hello>(`${this.apiUrl}/coucou`);
  }
}
