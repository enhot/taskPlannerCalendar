import { TestBed } from '@angular/core/testing';

import { ApiUserLogsService } from './api-user-logs.service';

describe('ApiUserLogsService', () => {
  let service: ApiUserLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiUserLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
