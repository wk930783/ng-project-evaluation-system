import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const result = inject(UserService).checkLogin();
  if(!result){
    inject(Router).navigate(['/login']);
  }
  return result;
};


export const notLoginGuard: CanActivateFn = (route, state) => {
  const result = inject(UserService).checkLogin();
  if(result){
    inject(Router).navigate(['/']);
  }
  return !result;
};
