import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './aurh.service'; // Asegúrate de ajustar la ruta al archivo

@Component({
  selector: 'app-recovery',
  standalone: true,
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
  imports: [FormsModule, CommonModule]
})
export class RecoveryComponent {
  email: string = '';
  recoveryError: boolean = false;
  recoverySuccess: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  recoverPassword(event: Event): void {
    event.preventDefault();

    this.authService.recoverPassword(this.email).subscribe({
      next: (response) => {
        // Manejar la respuesta exitosa
        this.recoverySuccess = true;
        this.recoveryError = false;
      },
      error: (error) => {
        // Manejar el error
        this.recoveryError = true;
        this.errorMessage = error.error.message || 'Ocurrió un error al intentar recuperar la contraseña.';
      }
    });
  }
}
