import { CanActivateFn } from '@angular/router';

export const projectEvaluationGuard: CanActivateFn = (route, state) => {
  return true;
};
