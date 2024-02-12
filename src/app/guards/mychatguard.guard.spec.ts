import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mychatguardGuard } from './mychatguard.guard';

describe('mychatguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mychatguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
