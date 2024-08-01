import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderNewComponent } from './service-provider-new.component';

describe('ServiceProviderNewComponent', () => {
  let component: ServiceProviderNewComponent;
  let fixture: ComponentFixture<ServiceProviderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceProviderNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceProviderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
