import { CanActivateFn } from '@angular/router';

export const teacherAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
