import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';

@Component({
  selector: 'app-client-landing-page',
  templateUrl: './client-landing-page.component.html',
  styleUrls: ['./client-landing-page.component.scss']
})
export class ClientLandingPageComponent implements OnInit {

  validLocation: boolean;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.requestLocation();
  }

  onClickOpenSearchDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.minWidth = "350px";

    this.dialog.open(SearchDialogComponent, dialogConfig)
  }

  private requestLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.validLocation = true;
      }, error => {
        if (error.PERMISSION_DENIED) {
          console.log('location denied');
          this.validLocation = false;
        }
      });
    }
  }

}
