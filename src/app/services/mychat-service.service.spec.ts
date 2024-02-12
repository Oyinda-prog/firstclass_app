import { TestBed } from '@angular/core/testing';

import { MychatServiceService } from './mychat-service.service';

describe('MychatServiceService', () => {
  let service: MychatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MychatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
