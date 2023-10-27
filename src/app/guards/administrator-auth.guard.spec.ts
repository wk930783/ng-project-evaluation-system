import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { administratorAuthGuard } from './administrator-auth.guard';

describe('administratorAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => administratorAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
