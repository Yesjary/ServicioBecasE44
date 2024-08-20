import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tudominio.com/api'; // Cambia la URL por la de tu API

  constructor(private http: HttpClient) {}

  recoverPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recover-password`, { email });
  }
}
