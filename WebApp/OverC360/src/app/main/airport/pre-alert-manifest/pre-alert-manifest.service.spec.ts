import { TestBed } from '@angular/core/testing';


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
