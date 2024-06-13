import { ChangeDetectorRef, ComponentRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { NgxScrollTopCoreService } from './ngx-scrolltop.core.service';

describe('NgxScrollTopComponent', () => {
  let component: NgxScrollTopComponent;
  let componentRef: ComponentRef<NgxScrollTopComponent>;
  let fixture: ComponentFixture<NgxScrollTopComponent>;
  let element: HTMLButtonElement;
  let cdRef: ChangeDetectorRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxScrollTopComponent],
      providers: [NgxScrollTopCoreService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollTopComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    component.show.set(true);
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.scrolltop-button');
    cdRef = fixture.componentRef.injector.get(ChangeDetectorRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set backgroundColor', () => {
    componentRef.setInput('backgroundColor', '#1b5e20');
    cdRef.detectChanges();

    expect(element.style.backgroundColor).toEqual('rgb(27, 94, 32)');
  });

  it('should set backgroundColor with alpha', () => {
    componentRef.setInput('backgroundColor', '#212121cc');
    cdRef.detectChanges();

    expect(element.style.backgroundColor).toEqual('rgba(33, 33, 33, 0.8)');
  });

  it('should set symbolColor', () => {
    componentRef.setInput('symbolColor', '#FF6F00');
    cdRef.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.scrolltop-button svg').style.fill
    ).toEqual('rgb(255, 111, 0)');
  });

  it('should set size', () => {
    componentRef.setInput('size', 55);
    cdRef.detectChanges();

    expect(element.style.width).toEqual('55px');

    expect(element.style.height).toEqual('55px');
  });

  it('should set position', () => {
    componentRef.setInput('position', 'left');
    cdRef.detectChanges();

    expect(element.style.left).toEqual('20px');
  });

  it('should set theme', () => {
    componentRef.setInput('theme', 'deeppurple');
    cdRef.detectChanges();

    const computedStyle = window.getComputedStyle(element);

    expect(element.className).toContain('deeppurple');

    expect(computedStyle.color).toEqual('rgb(237, 231, 246)');

    expect(computedStyle.backgroundColor).toEqual('rgb(49, 27, 146)');
  });
});
