import { TestBed } from '@angular/core/testing';

import { PreAlertManifestService } from './pre-alert-manifest.service';

describe('PreAlertManifestService', () => {
  let service: PreAlertManifestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreAlertManifestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
