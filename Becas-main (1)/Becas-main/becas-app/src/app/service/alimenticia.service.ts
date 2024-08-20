import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimenticiaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000/api/alimenticia';

  // Método para crear una nueva solicitud de beca alimenticia
  crearSolicitud(solicitud: any): Observable<any> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return this.http.post(this.apiUrl, solicitud, {
        headers: {
          Authorization: token
        }
      });
    } else {
      return new Observable<any>();
    }
  }

  // Método para obtener todas las solicitudes de beca alimenticia
  obtenerSolicitudes(): Observable<any> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return this.http.get(this.apiUrl, {
        headers: {
          Authorization: token
        }
      });
    } else {
      return new Observable<any>();
    }
  }

  // Método para actualizar una solicitud de beca alimenticia por ID
  actualizarSolicitud(id: string, solicitud: any): Observable<any> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return this.http.put(`${this.apiUrl}/${id}`, solicitud, {
        headers: {
          Authorization: token
        }
      });
    } else {
      return new Observable<any>();
    }
  }

  // Método para obtener una solicitud específica de beca alimenticia por ID
  obtenerSolicitud(id: string): Observable<any> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return this.http.get(`${this.apiUrl}/${id}`, {
        headers: {
          Authorization: token
        }
      });
    } else {
      return new Observable<any>();
    }
  }

  // Método para eliminar una solicitud de beca alimenticia por ID
  eliminarSolicitud(id: string): Observable<any> {
    const token = localStorage.getItem('JWT_TOKEN');
    if (token) {
      return this.http.delete(`${this.apiUrl}/${id}`, {
        headers: {
          Authorization: token
        }
      });
    } else {
      return new Observable<any>();
    }
  }
  /*implenetacion del metodo get retornando al metodo donde se encunetra nuestra api
  el cual es la direccion de nuestra tabla dentro de la base de datos
  */
  getAUsers():Observable<any>{
    const token = localStorage.getItem('JWT_TOKEN');
    if(token){
      return this.http.get('http://localhost:4000/api/alimenticia', {
        headers:{
          Authorization: token
        }
      });
    }else{
      return new Observable<any>();
    }}

}
