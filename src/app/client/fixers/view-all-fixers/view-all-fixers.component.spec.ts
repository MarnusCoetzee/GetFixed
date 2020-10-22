import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllFixersComponent } from './view-all-fixers.component';

describe('ViewAllFixersComponent', () => {
  let component: ViewAllFixersComponent;
  let fixture: ComponentFixture<ViewAllFixersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllFixersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllFixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
