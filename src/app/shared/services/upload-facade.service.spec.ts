import { TestBed } from '@angular/core/testing';

import { UploadFacadeService } from './upload-facade.service';

describe('UploadFacadeService', () => {
  let service: UploadFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
