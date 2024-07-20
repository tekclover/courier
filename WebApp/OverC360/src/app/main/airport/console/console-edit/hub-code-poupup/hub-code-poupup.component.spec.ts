import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubCodePoupupComponent } from './hub-code-poupup.component';

describe('HubCodePoupupComponent', () => {
  let component: HubCodePoupupComponent;
  let fixture: ComponentFixture<HubCodePoupupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HubCodePoupupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HubCodePoupupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
