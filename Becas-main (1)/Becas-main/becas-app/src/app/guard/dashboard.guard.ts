import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const dashboardGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let routerService = inject(Router);
  if(authService.isLoggedIn()){
    routerService.navigate(['/dashboard']);
    return false;
  }else{
    return true;
  }
  
};
