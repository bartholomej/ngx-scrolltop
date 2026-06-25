
import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

describe('NgxScrollTopService', () => {
  let srvc: NgxScrollTopCoreService;
  const mockDocument = {
    documentElement: { scrollTop: window.innerHeight * 2 + 1 },
  };

  beforeEach(() => {
    // Reset to a "scrolled down" position so each test starts from a known state.
    mockDocument.documentElement.scrollTop = window.innerHeight * 2 + 1;

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

  it('Classic mode: Hide button near the top', () => {
    mockDocument.documentElement.scrollTop = window.innerHeight - 1;

    expect(srvc.onWindowScroll('classic')).toBe(false);
  });

  it('Smart mode: Hide button at the very top', () => {
    mockDocument.documentElement.scrollTop = 0;

    expect(srvc.onWindowScroll('smart')).toBe(false);
  });

  it('Smart mode: Hide button while still scrolling down', () => {
    // Past the threshold but never scrolled back up yet -> still hidden.
    expect(srvc.onWindowScroll('smart')).toBe(false);
  });

  it('Scroll to top', async () => {
    await srvc.scrollToTop();
    expect(document.documentElement.scrollTop).toBe(0);
  });
});
