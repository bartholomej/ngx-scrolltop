import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWayComponent } from './component-way.component';

describe('ComponentWayComponent', () => {
  let component: ComponentWayComponent;
  let fixture: ComponentFixture<ComponentWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
