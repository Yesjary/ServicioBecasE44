import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { dashboardGuard } from './guard/dashboard.guard';
import { AlimentaryComponent } from './alimentary/alimentary.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { InternasComponent } from './internas/internas.component';
import { UserAlimenticiaComponent } from './user-alimenticia/user-alimenticia.component';
import { UserExternaComponent } from './user-externa/user-externa.component';
import { ListBecasExternasComponent } from './components/list-becas-externas.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate:[dashboardGuard]},
    {path: 'recovery', component: RecoveryComponent, canActivate:[dashboardGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate:[authGuard]},
    {path: 'alimenticia', component: AlimentaryComponent},
    {path: 'becados_alimenticia', component: UserAlimenticiaComponent},
    {path: 'users', component: AllUsersComponent}, 
    {path: 'register', component: UsersComponent},
    {path: 'becas-internas', component: InternasComponent},
    {path: 'becados_externa', component:UserExternaComponent},
    {path: 'becas-externas', component: ListBecasExternasComponent},
    {path: '', redirectTo: '/login', pathMatch:"full"}
    
];
