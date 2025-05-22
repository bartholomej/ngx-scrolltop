
import { TestBed } from '@angular/core/testing';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

describe('NgxScrollTopService', () => {
  let srvc: NgxScrollTopCoreService;
  const mockDocument = {
    documentElement: { scrollTop: window.innerHeight * 2 + 1 },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useValue: mockDocument }, NgxScrollTopCoreService],
    });

    srvc = TestBed.inject(NgxScrollTopCoreService);
  });

  it('should be created', () => {
    expect(srvc).toBeTruthy();
  });

  it('Classic mode: Show button on scroll', () => {
    const mode = 'classic';

    expect(srvc.onWindowScroll(mode)).toBe(true);
  });

  it('Smart mode: Show button on scroll', () => {
    const mode = 'smart';
    // Set private properties as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (srvc as any).scrolledFromTop.set(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (srvc as any).scrollOffset.set(window.innerHeight * 2 + 2);

    expect(srvc.onWindowScroll(mode)).toBe(true);
  });

  it('Scroll to top', () => {
    srvc.scrollToTop();
    expect(document.documentElement.scrollTop).toBe(0);
  });
});