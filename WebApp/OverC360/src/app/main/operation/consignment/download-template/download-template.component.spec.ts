import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadTemplateComponent } from './download-template.component';

describe('DownloadTemplateComponent', () => {
  let component: DownloadTemplateComponent;
  let fixture: ComponentFixture<DownloadTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
