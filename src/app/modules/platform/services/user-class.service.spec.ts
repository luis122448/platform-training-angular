import { TestBed } from '@angular/core/testing';

import { UserClassService } from './user-class.service';

describe('UserClassService', () => {
  let service: UserClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
