import { TestBed } from '@angular/core/testing';

import { DatasourceClassService } from './datasource-class.service';

describe('DatasourceClassService', () => {
  let service: DatasourceClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasourceClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
