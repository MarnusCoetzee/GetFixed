import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatingsDialogComponent } from './view-ratings-dialog.component';

describe('ViewRatingsDialogComponent', () => {
  let component: ViewRatingsDialogComponent;
  let fixture: ComponentFixture<ViewRatingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
