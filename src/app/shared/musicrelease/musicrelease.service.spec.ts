import { TestBed } from '@angular/core/testing';

import { MusicreleaseService } from './musicrelease.service';

describe('MusicreleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicreleaseService = TestBed.get(MusicreleaseService);
    expect(service).toBeTruthy();
  });
});
