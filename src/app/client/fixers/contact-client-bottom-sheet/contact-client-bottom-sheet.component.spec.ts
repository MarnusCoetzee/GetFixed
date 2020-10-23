import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactClientBottomSheetComponent } from './contact-client-bottom-sheet.component';

describe('ContactClientBottomSheetComponent', () => {
  let component: ContactClientBottomSheetComponent;
  let fixture: ComponentFixture<ContactClientBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactClientBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactClientBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
