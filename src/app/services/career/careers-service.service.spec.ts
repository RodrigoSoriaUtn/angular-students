import { TestBed } from '@angular/core/testing';

import { CareersServiceService } from './careers-service.service';

describe('CareersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareersServiceService = TestBed.get(CareersServiceService);
    expect(service).toBeTruthy();
  });
});
