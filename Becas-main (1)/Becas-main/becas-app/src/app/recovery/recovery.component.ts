import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-recovery',
  standalone: true,
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],
  imports: [FormsModule, CommonModule] // Incluye CommonModule aquí
})
export class RecoveryComponent {
  email: string = '';
  recoveryError: boolean = false;

  recoverPassword(event: Event): void {
    event.preventDefault();
    // Implementa la lógica de recuperación de contraseña
  }
}
