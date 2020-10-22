import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-client-landing-page',
  templateUrl: './client-landing-page.component.html',
  styleUrls: ['./client-landing-page.component.scss']
})
export class ClientLandingPageComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onClickOpenSearchDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;

    this.dialog.open(SearchDialogComponent, dialogConfig)
  }

}
