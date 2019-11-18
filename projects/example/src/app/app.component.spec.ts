import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxScrollTopModule } from 'projects/ngx-scrolltop/src/public-api';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentWayModule } from './component-way/component-way.module';
import { DirectiveWayModule } from './directive-way/directive-way.module';

describe('AppComponent', () => {
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        ComponentWayModule,
        DirectiveWayModule,
        NgxScrollTopModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();
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

  it('Scroll: Directive', done => {
    router.navigateByUrl('/directive-way');
    const fixture = TestBed.createComponent(AppComponent);

    initScroll(fixture);

    scrollTo(window.innerHeight * 2 - 100, finishIt);

    function finishIt() {
      const compiled = fixture.debugElement.nativeElement;

      const ngxScrollTopElementWithDirective = compiled.querySelector(
        '.my-custom-scrolltop-element'
      );
      expect(ngxScrollTopElementWithDirective.style.display).not.toEqual(
        'none'
      );
      done();
    }
  });

  // it('Scroll: Component', done => {
  //   router.navigateByUrl('/');
  //   const fixture = TestBed.createComponent(AppComponent);

  //   initScroll(fixture);

  //   scrollTo(window.innerHeight * 2 - 100, finishIt);

  //   function finishIt() {
  //     const compiled = fixture.debugElement.nativeElement;

  //     const ngxScrollTopElement = compiled.querySelector('.scrolltop-button');
  //     expect(ngxScrollTopElement).toBeTruthy();
  //     done();
  //   }
  // });
});

function initScroll(fixture): void {
  const scrollEvent = document.createEvent('CustomEvent');
  scrollEvent.initCustomEvent('scroll', false, false, null);

  window.dispatchEvent(scrollEvent);

  window.scrollTo(0, document.body.scrollHeight);

  fixture.detectChanges();
}

function scrollTo(offset, callback): void {
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
