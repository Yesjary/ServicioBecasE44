import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);

  // constructor() { }

  register(user:{
    matricula: number;
    nombre: string;
    apellidoP: string;
    apellidoM: string;
    correo: string;
    password: string;
    rol: string
  }): Observable<any>{
    const token = localStorage.getItem('JWT_TOKEN');
    if(token){
      return this.http.post('http://localhost:4000/api/usuarios', user, {
      headers:{
        Authorization: token
      }});
    } else {
      return new Observable<any>();
    }
  }
}
