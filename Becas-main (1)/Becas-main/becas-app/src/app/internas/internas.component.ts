import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './internas.component.html',
  styleUrl: './internas.component.css'
})
export class InternasComponent {
  authService = inject(AuthService);
  logOut(){
    return this.authService.logout();
  }
}
