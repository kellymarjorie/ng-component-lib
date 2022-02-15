import { TestBed } from '@angular/core/testing';

import { NgComponentLibService } from './ng-component-lib.service';

describe('NgComponentLibService', () => {
  let service: NgComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
