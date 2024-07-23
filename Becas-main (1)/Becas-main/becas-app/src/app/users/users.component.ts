import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { AuthService } from '../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  private registerService = inject(RegisterService);

  matricula = "";
  nombre = "";
  apellidoP = "";
  apellidoM = "";
  correo = "";
  password = "";
  passwordC = "";
  rol = "";
  registrationError = false;
  registrationSuccess = false;

  validateInput(event: any): void {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, '');
    event.target.value = numbersOnly;
  }

  userRegister(event: Event){
    event.preventDefault();
    this.registerService.register({
      matricula : Number(this.matricula),
      nombre : this.nombre,
      apellidoP : this.apellidoP,
      apellidoM : this.apellidoM,
      correo : this.correo,
      password : this.password,
      rol : this.rol
    }).subscribe ({
      next: () => {
        this.resetForm();
        this.registrationError = false;
        this.registrationSuccess = true;
        setTimeout(()=> this.registrationSuccess = false, 2000)
      },
      error: () => {
        this.registrationError = true;
        this.registrationSuccess = false;
      }
    });
  }

  resetForm(): void {
    this.matricula = "";
    this.nombre = "";
    this.apellidoP = "";
    this.apellidoM = "";
    this.correo = "";
    this.password = "";
    this.passwordC = "";
    this.rol = "";
  }

  authService = inject(AuthService);
  logOut(){
    return this.authService.logout();
  }
}


