import { TestBed } from '@angular/core/testing';

import { OublisService } from './oublis.service';

describe('OublisService', () => {
  let service: OublisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OublisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
