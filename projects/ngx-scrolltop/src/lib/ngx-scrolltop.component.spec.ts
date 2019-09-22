import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollTopComponent } from './ngx-scrolltop.component';

describe('NgxScrollTopComponent', () => {
  let component: NgxScrollTopComponent;
  let fixture: ComponentFixture<NgxScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
