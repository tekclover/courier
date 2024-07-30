import { TestBed } from '@angular/core/testing';

import { ConsoleTrackingReportService } from './console-tracking-report.service';

describe('ConsoleTrackingReportService', () => {
  let service: ConsoleTrackingReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleTrackingReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
