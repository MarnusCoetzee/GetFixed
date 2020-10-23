import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contact-client-bottom-sheet',
  templateUrl: './contact-client-bottom-sheet.component.html',
  styleUrls: ['./contact-client-bottom-sheet.component.scss']
})
export class ContactClientBottomSheetComponent implements OnInit {

  uid: string;
  email: string;
  cellNumber: number;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.uid = data.uid;
    this.email = data.email;
    this.cellNumber = data.cellNumber;
  }

  ngOnInit(): void {
  }

}
