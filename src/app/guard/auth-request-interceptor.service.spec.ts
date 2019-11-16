import { TestBed } from '@angular/core/testing';

import { AuthRequestInterceptorService } from './auth-request-interceptor.service';

describe('AuthRequestInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthRequestInterceptorService = TestBed.get(AuthRequestInterceptorService);
    expect(service).toBeTruthy();
  });
});
