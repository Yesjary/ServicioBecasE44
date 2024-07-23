import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);

  getUsers():Observable<any>{
    const token = localStorage.getItem('JWT_TOKEN');
    if(token){
      return this.http.get('http://localhost:4000/api/usuarios', {
        headers:{
          Authorization: token
        }
      });
    }else{
      return new Observable<any>();
    }
  }
}
