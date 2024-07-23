import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { UsersService } from '../service/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
 private authService = inject(AuthService);
 private usersService = inject(UsersService)
 users: any[] = [];

 constructor (){
  this.getUsers()
 }

 logOut(){
   this.authService.logout();
 }

 getUsers(){
  this.usersService.getUsers().subscribe((res)=>{
    this.users = res as any[];
    console.log(this.users);
  });
 }
}
