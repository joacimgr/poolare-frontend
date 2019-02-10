import { TestBed } from '@angular/core/testing';

import { PoolarebackendService } from './poolarebackend.service';

describe('PoolarebackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoolarebackendService = TestBed.get(PoolarebackendService);
    expect(service).toBeTruthy();
  });
});
