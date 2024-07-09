import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAlertManifestIndicatorComponent } from './pre-alert-manifest-indicator.component';

describe('PreAlertManifestIndicatorComponent', () => {
  let component: PreAlertManifestIndicatorComponent;
  let fixture: ComponentFixture<PreAlertManifestIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreAlertManifestIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreAlertManifestIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
