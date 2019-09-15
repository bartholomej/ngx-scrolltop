import { TestBed } from '@angular/core/testing';

import { NgxScrolltopService } from './ngx-scrolltop.service';

describe('NgxScrolltopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxScrolltopService = TestBed.get(NgxScrolltopService);
    expect(service).toBeTruthy();
  });
});
