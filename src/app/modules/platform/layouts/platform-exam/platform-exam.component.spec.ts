import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformExamComponent } from './platform-exam.component';

describe('PlatformExamComponent', () => {
  let component: PlatformExamComponent;
  let fixture: ComponentFixture<PlatformExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformExamComponent]
    });
    fixture = TestBed.createComponent(PlatformExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
