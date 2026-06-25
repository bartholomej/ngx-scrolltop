// Test setup loaded before the spec files (see angular.json unit-test `setupFiles`).

import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

// jsdom doesn't implement window scrolling, which logs noisy "Not implemented"
// errors whenever the library (or a spec) calls scroll()/scrollTo(). Stub them.
const noop = (): void => undefined;
window.scroll = noop;
window.scrollTo = noop;

// First, initialize the Angular testing environment.
try {
  getTestBed().initTestEnvironment(BrowserTestingModule, platformBrowserTesting(), {
    teardown: { destroyAfterEach: false },
  });
} catch {
  // Already initialized
}
