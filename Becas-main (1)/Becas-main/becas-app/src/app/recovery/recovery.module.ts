import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule
import { FormsModule } from '@angular/forms';

import { RecoveryComponent } from './recovery.component';

@NgModule({
  declarations: [
    RecoveryComponent
  ],
  imports: [
    CommonModule,  // Incluye CommonModule aquí
    FormsModule
  ]
})
export class RecoveryModule { }