import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Asegúrate de incluir CommonModule aquí
})
export class LoginComponent {
  matricula = "";
  password = "";
  showPassword = false;
  loginError = false; // Estado de error de login

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (this.showPassword) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  validateInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    inputElement.value = inputElement.value.replace(/[^0-9]/g, '');
  }

  login(event: Event): void {
    event.preventDefault();
    this.authService.login({
      matricula: Number(this.matricula),
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
        this.loginError = false;
        this.resetForm();
      },
      error: () => {
        this.loginError = true;
        this.resetForm();
      }
    });
  }
  resetForm(): void {
    this.matricula = "";
    this.password = "";
  }
}
