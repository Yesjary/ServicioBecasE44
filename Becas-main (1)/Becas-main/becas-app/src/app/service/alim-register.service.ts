import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlimRegisterService {
  private http = inject(HttpClient);

  //constructor() { }
  registeralm(useralimenticia:{
    curp:string;
    matricula: number;
    apellidoP: string;
    apellidoM: string;
    nombre: string;
    carrera: string;
    cuatrimestre: string;
    sexo: string;
    telefono: string;
    correo: string;
  }): Observable<any>{
    const token = localStorage.getItem('JWT_TOKEN');
    if(token){
      return this.http.post('http://localhost:4000/api/alimenticia', useralimenticia, {
      headers:{
        Authorization: token
      }});
    } else {
      return new Observable<any>();
    }
  }
}
