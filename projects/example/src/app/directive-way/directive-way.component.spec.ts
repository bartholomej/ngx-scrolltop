import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveWayComponent } from './directive-way.component';

describe('DirectiveWayComponent', () => {
  let component: DirectiveWayComponent;
  let fixture: ComponentFixture<DirectiveWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
