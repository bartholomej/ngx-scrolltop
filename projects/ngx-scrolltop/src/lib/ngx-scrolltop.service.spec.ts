import { TestBed } from '@angular/core/testing';

import { NgxScrollTopService } from './ngx-scrolltop.service';

describe('NgxScrollTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxScrollTopService = TestBed.get(NgxScrollTopService);
    expect(service).toBeTruthy();
  });
});
