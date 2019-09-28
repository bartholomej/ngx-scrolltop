import { TestBed, getTestBed } from '@angular/core/testing';

import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { DOCUMENT } from '@angular/common';

describe('NgxScrollTopService', () => {
  let injector: TestBed;
  let srvc: NgxScrollTopCoreService;
  const mockDocument = {
    documentElement: { scrollTop: window.innerHeight * 2 + 1 },
  };

  beforeEach(() => {
    srvc = new NgxScrollTopCoreService('classic');
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useValue: mockDocument }],
    });

    injector = getTestBed();
    srvc = injector.get(NgxScrollTopCoreService);
  });

  it('should be created', () => {
    const service: NgxScrollTopCoreService = TestBed.get(
      NgxScrollTopCoreService
    );
    expect(service).toBeTruthy();
  });

  it('Classic mode: Show button on scroll', () => {
    const mode = 'classic';

    expect(srvc.onWindowScroll(mode)).toBe(true);
  });

  it('Smart mode: Show button on scroll', () => {
    const mode = 'smart';
    // Set private properties as any
    (srvc as any).scrolledFromTop = true;
    (srvc as any).scrollOffset = window.innerHeight * 2 + 2;

    expect(srvc.onWindowScroll(mode)).toBe(true);
  });

  it('Scroll to top', () => {
    srvc.scrollToTop();
    expect(document.documentElement.scrollTop).toBe(0);
  });
});
