import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleTrackingReportComponent } from './console-tracking-report.component';

describe('ConsoleTrackingReportComponent', () => {
  let component: ConsoleTrackingReportComponent;
  let fixture: ComponentFixture<ConsoleTrackingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsoleTrackingReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsoleTrackingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
