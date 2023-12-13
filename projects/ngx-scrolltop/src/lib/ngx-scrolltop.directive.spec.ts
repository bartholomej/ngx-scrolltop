import { ChangeDetectorRef, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';
import { NgxScrollTopDirective } from './ngx-scrolltop.directive';

@Component({
  template: '<span class="my-scroll-top-button" ngxScrollTop>Top</span>',
})
class TestComponent {
  constructor() { }
}

describe('NgxScrollTopDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let cdRef: ChangeDetectorRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [NgxScrollTopDirective],
      providers: [NgxScrollTopCoreService]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    cdRef = fixture.componentRef.injector.get(ChangeDetectorRef);
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should scroll to top', done => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const p: HTMLElement = debugEl.querySelector('.my-scroll-top-button');

    // Make window scrollable
    document.body.style.minHeight = '1500px';
    window.scrollTo(0, 50);
    fixture.detectChanges();
    cdRef.detectChanges();

    p.click();
    fixture.detectChanges();
    cdRef.detectChanges();

    setTimeout(() => {
      // Wait some time for smooth scroll
      expect(document.documentElement.scrollTop).toBe(0);
      done();
    }, 3000);
  });
});
