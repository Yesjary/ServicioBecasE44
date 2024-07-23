import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private inactivityTimeout = 5 * 60 * 1000;

  constructor(private router: Router, private http: HttpClient) {}

  login(user: { matricula: number, password: string }): Observable<any> {
    return this.http.post('http://localhost:4000/api', user).pipe(
      tap((res: any) => this.doLoginUser(res.matricula, res.accessToken)),
      catchError(error => {
        throw new Error('Invalid credentials');
      })
    );
  }

  private doLoginUser(matricula: number, token: string): void {
    localStorage.setItem(this.JWT_TOKEN, token);
    this.isAuthenticatedSubject.next(true);
    this.initInactivityTimer();
    this.startTokenExpirationCheck();
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  private isTokenExpired(): boolean {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if (!token) return true;

    const decoded: any = jwtDecode(token);
    const expirationDate = decoded.exp * 1000;
    return Date.now() > expirationDate;
  }

  private refreshToken(): void {
    const token = localStorage.getItem(this.JWT_TOKEN);
    if (token) {
      this.http.get('http://localhost:4000/api/refresh-token', {
        headers: { Authorization: token }
      }).pipe(
        tap((res: any) => localStorage.setItem(this.JWT_TOKEN, res.refreshToken))
      ).subscribe();
    } else {
      this.logout();
    }
  }

  private startTokenExpirationCheck(): void {
    timer(0, 60000).subscribe(() => {
      if (this.isTokenExpired()) {
        this.refreshToken();
      }
    });
  }

  private initInactivityTimer(): void {
    let lastInteractionTime = Date.now();
    const resetTimer = () => lastInteractionTime = Date.now();

    ['mousemove', 'mousedown', 'keypress'].forEach(event =>
      window.addEventListener(event, resetTimer)
    );

    const subscription = timer(0, 1000).subscribe(() => {
      if (Date.now() - lastInteractionTime > this.inactivityTimeout) {
        alert('La sesión ha expirado');
        this.logout();
        subscription.unsubscribe();
      }
    });
  }
}
