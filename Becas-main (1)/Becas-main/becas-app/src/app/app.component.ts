import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthService} from './service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RecoveryComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'becas-app';
  //authService = inject(AuthService);

  // constructor(){
  //   this.authService.login({
  //     matricula: 2131120363,
  //     password: "A12345678A"
  //   }).subscribe((r)=>{
  //     const currentAuthUser$ = this.authService.getCurrentAuthUser();
  //   if (currentAuthUser$ !== null) {
  //     currentAuthUser$.subscribe((r) => {
  //       console.log(r);
  //     });
  //   } else {
  //     console.error("El método getCurrentAuthUser devolvió null.");
  //   }
  //   });
  // }
}
