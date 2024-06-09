import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformExamPreviewComponent } from './platform-exam-preview.component';

describe('PlatformExamPreviewComponent', () => {
  let component: PlatformExamPreviewComponent;
  let fixture: ComponentFixture<PlatformExamPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformExamPreviewComponent]
    });
    fixture = TestBed.createComponent(PlatformExamPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
