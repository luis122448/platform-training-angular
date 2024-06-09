import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformExamResultComponent } from './platform-exam-result.component';

describe('PlatformExamResultComponent', () => {
  let component: PlatformExamResultComponent;
  let fixture: ComponentFixture<PlatformExamResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformExamResultComponent]
    });
    fixture = TestBed.createComponent(PlatformExamResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
