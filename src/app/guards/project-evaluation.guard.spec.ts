import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { projectEvaluationGuard } from './project-evaluation.guard';

describe('projectEvaluationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => projectEvaluationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
