import { TestBed } from '@angular/core/testing';

import { HelloServiceService } from './hello-service.service';

describe('HelloServiceService', () => {
  let service: HelloServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
