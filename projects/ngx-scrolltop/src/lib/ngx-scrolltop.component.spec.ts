import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrolltopComponent } from './ngx-scrolltop.component';

describe('NgxScrolltopComponent', () => {
  let component: NgxScrolltopComponent;
  let fixture: ComponentFixture<NgxScrolltopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxScrolltopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxScrolltopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
