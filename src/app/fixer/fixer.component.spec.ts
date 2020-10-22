import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerComponent } from './fixer.component';

describe('FixerComponent', () => {
  let component: FixerComponent;
  let fixture: ComponentFixture<FixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
