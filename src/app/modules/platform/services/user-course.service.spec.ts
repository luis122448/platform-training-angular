import { TestBed } from '@angular/core/testing';

import { UserCourseService } from './user-course.service';

describe('UserCourseService', () => {
  let service: UserCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
