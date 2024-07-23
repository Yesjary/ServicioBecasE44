import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-alimenticia',
  standalone: true,
  imports: [],
  templateUrl: './user-alimenticia.component.html',
  styleUrl: './user-alimenticia.component.css'
})
export class UserAlimenticiaComponent {

  authService = inject(AuthService);
  logOut(){
    return this.authService.logout();
  }
}
