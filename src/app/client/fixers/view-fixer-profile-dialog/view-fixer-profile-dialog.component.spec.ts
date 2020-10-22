import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFixerProfileDialogComponent } from './view-fixer-profile-dialog.component';

describe('ViewFixerProfileDialogComponent', () => {
  let component: ViewFixerProfileDialogComponent;
  let fixture: ComponentFixture<ViewFixerProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFixerProfileDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFixerProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
