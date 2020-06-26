import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

@Component({
  template: '<span class="my-scroll-top-button" ngxScrollTop>Top</span>',
})
class TestComponent {
  constructor() {}
}

describe('NgxScrollTopDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxScrollTopDirective],
      providers: [NgxScrollTopCoreService]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should scroll to top', done => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('.my-scroll-top-button');

    // Make window scrollable
    document.body.style.minHeight = '1000px';
    window.scrollTo(0, 100);
    fixture.detectChanges();

    p.click();
    fixture.detectChanges();

    setTimeout(() => {
      // Wait some time for smooth scroll
      expect(document.documentElement.scrollTop).toBe(0);
      done();
    }, 2000);
  });
});
