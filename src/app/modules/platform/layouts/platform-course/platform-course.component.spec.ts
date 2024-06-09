import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformCourseComponent } from './platform-course.component';

describe('PlatformCourseComponent', () => {
  let component: PlatformCourseComponent;
  let fixture: ComponentFixture<PlatformCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformCourseComponent]
    });
    fixture = TestBed.createComponent(PlatformCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
