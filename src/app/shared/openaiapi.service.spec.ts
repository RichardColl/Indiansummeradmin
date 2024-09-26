import { TestBed } from '@angular/core/testing';

import { OpenaiapiService } from './openaiapi.service';

describe('OpenaiapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenaiapiService = TestBed.get(OpenaiapiService);
    expect(service).toBeTruthy();
  });
});
