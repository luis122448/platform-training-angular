import { TestBed } from '@angular/core/testing';

import { UserCommentService } from './user-comment.service';

describe('UserCommentService', () => {
  let service: UserCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
