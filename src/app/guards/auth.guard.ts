import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { MenuService } from '../services/menu.service';

export const userInfoCanActivateGuard: CanActivateFn = (route, state) => {
  const canActivate = inject(UserService).userInfo.moduleCode.includes('u001');
  if(canActivate) {
    inject(MenuService).nowMenuCode ='u001';
  }
  return inject(UserService).userInfo.moduleCode.includes('u001');
};

export const accountManagementCanActivateGuard: CanActivateFn = (route, state) => {
  const canActivate = inject(UserService).userInfo.moduleCode.includes('a001');
  if(canActivate) {
    inject(MenuService).nowMenuCode ='a001';
  }
  return canActivate;
};

export const projectEvaluationCanActivateGuard: CanActivateFn = (route, state) => {
  const canActivate = inject(UserService).userInfo.moduleCode.includes('p003');
  if(canActivate) {
    inject(MenuService).nowMenuCode ='p003';
  }
  return canActivate;
};

export const projectFileManagementCanActivateGuard: CanActivateFn = (route, state) => {
  const canActivate = inject(UserService).userInfo.moduleCode.includes('p002');
  if(canActivate) {
    inject(MenuService).nowMenuCode ='p002';
  }
  return canActivate;
};

export const projectTeamingCanActivateGuard: CanActivateFn = (route, state) => {
  const canActivate = inject(UserService).userInfo.moduleCode.includes('p001');
  if(canActivate) {
    inject(MenuService).nowMenuCode ='p001';
  }
  return canActivate;
};
