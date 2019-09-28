import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgxScrollTopModule } from 'projects/ngx-scrolltop/src/public-api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NgxScrollTopModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NgxScrollTop demo | Angular go to top button');
  });

  it('should render main component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'ngx-scrolltop'
    );
  });

  it('scroll down and up', done => {
    const fixture = TestBed.createComponent(AppComponent);

    function scrollTo(offset, callback) {
      offset = Math.round(offset);
      const onScroll = () => {
        const scrollTop = window.scrollY;

        if (scrollTop === offset) {
          window.removeEventListener('scroll', onScroll);
          callback();
        }
      };
      window.addEventListener('scroll', onScroll);
      onScroll();
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }

    const scrollEvent = document.createEvent('CustomEvent');
    scrollEvent.initCustomEvent('scroll', false, false, null);

    window.dispatchEvent(scrollEvent);

    window.scrollTo(0, document.body.scrollHeight);

    fixture.detectChanges();

    scrollTo(window.innerHeight * 2 - 100, finishIt);

    function finishIt() {
      const compiled = fixture.debugElement.nativeElement;

      const ngxScrollTopElement = compiled.querySelector('ngx-scrolltop');
      const ngxScrollTopElementWithDirective = compiled.querySelector(
        '.my-custom-scrolltop-element'
      );

      expect(ngxScrollTopElement).toBeTruthy();
      expect(ngxScrollTopElementWithDirective).toBeTruthy();
      // TODO: Separate routes in example
      // expect(ngxScrollTopElementWithDirective.style.display).not.toEqual(
      //   'none'
      // );
      done();
    }
  });
});
