import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollTopComponent } from './ngx-scrolltop.component';
import { ElementRef } from '@angular/core';

describe('NgxScrollTopComponent', () => {
  let component: NgxScrollTopComponent;
  let fixture: ComponentFixture<NgxScrollTopComponent>;
  let element: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxScrollTopComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollTopComponent);
    component = fixture.componentInstance;
    component.show = true;
    fixture.detectChanges();
    element = fixture.nativeElement.querySelector('.scrolltop-button');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set backgroundColor', () => {
    component.backgroundColor = '#1b5e20';
    fixture.detectChanges();

    expect(element.style.backgroundColor).toEqual('rgb(27, 94, 32)');
  });

  it('should set backgroundColor with alpha', () => {
    component.backgroundColor = '#212121cc';
    fixture.detectChanges();

    expect(element.style.backgroundColor).toEqual('rgba(33, 33, 33, 0.8)');
  });

  it('should set symbolColor', () => {
    component.symbolColor = '#FF6F00';
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('.scrolltop-button svg').style.fill
    ).toEqual('rgb(255, 111, 0)');
  });

  it('should set size', () => {
    component.size = 55;
    fixture.detectChanges();

    expect(element.style.width).toEqual('55px');

    expect(element.style.height).toEqual('55px');
  });

  it('should set symbol', () => {
    component.symbol = 'x';
    fixture.detectChanges();

    expect(
      fixture.nativeElement
        .querySelector('.scrolltop-button')
        .textContent.trim()
    ).toEqual('x');
  });

  it('should set position', () => {
    component.position = 'left';
    fixture.detectChanges();

    expect(element.style.left).toEqual('20px');
  });

  it('should set theme', () => {
    component.theme = 'deeppurple';
    fixture.detectChanges();

    const computedStyle = window.getComputedStyle(element);

    expect(element.className).toContain('deeppurple');

    expect(computedStyle.color).toEqual('rgb(237, 231, 246)');

    expect(computedStyle.backgroundColor).toEqual('rgb(49, 27, 146)');
  });
});
