import { TestBed, inject } from '@angular/core/testing';

import { LogGuardService } from './log-guard.service';

describe('LogGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogGuardService]
    });
  });

  it('should be created', inject([LogGuardService], (service: LogGuardService) => {
    expect(service).toBeTruthy();
  }));
});
