import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BecasExternasService {
  private apiUrl = 'http://localhost:5000/api/becas-externas';

  constructor(private http: HttpClient) {}

  obtenerBecas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  obtenerBeca(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearBeca(beca: any): Observable<any> {
    return this.http.post(this.apiUrl, beca);
  }

  actualizarBeca(id: string, beca: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, beca);
  }

  eliminarBeca(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
