import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AlimenticiaService } from '../service/alimenticia.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlimRegisterService } from '../service/alim-register.service';

@Component({
  selector: 'app-user-alimenticia',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './user-alimenticia.component.html',
  styleUrls: ['./user-alimenticia.component.css']
})
export class UserAlimenticiaComponent {
  private alimregisterService = inject(AlimRegisterService);
  curp="";
  matricula = "";
  apellidoP = "";
  apellidoM = "";
  nombre = "";
  carrera="";
  cuatrimestre="";
  sexo="";
  telefono="";
  correo = "";
  registrationError = false;
  registrationSuccess = false;

  validateInput(event: any): void {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, '');
    event.target.value = numbersOnly;
  }

  useralmRegister(event: Event){
    event.preventDefault();
    this.alimregisterService.registeralm({
      curp: this.curp,
      matricula : Number(this.matricula),
      apellidoP : this.apellidoP,
      apellidoM : this.apellidoM,
      nombre : this.nombre,
      carrera: this.carrera,
      cuatrimestre: this.cuatrimestre,
      sexo: this.sexo,
      telefono: this.telefono,
      correo : this.correo,
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
    this.curp="";
    this.matricula = "";
    this.apellidoP = "";
    this.apellidoM = "";
    this.nombre = "";
    this.carrera="";
    this.cuatrimestre="";
    this.sexo="";
    this.telefono="";
    this.correo = "";
  }

  onSubmit(form: any) {
    this.useralmRegister(form.value);
  }
}