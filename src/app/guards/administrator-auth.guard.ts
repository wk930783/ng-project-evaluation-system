import { CanActivateFn } from '@angular/router';

export const administratorAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
