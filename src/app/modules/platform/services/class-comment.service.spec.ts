import { TestBed } from '@angular/core/testing';

import { ClassCommentService } from './class-comment.service';

describe('ClassCommentService', () => {
  let service: ClassCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
