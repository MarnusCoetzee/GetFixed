import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLandingPageComponent } from './client-landing-page/client-landing-page.component';
import { MaterialModule } from '../material.module';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllFixersComponent } from './fixers/view-all-fixers/view-all-fixers.component';
import { ViewFixerProfileDialogComponent } from './fixers/view-fixer-profile-dialog/view-fixer-profile-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
import { ViewRatingsDialogComponent } from './fixers/view-ratings-dialog/view-ratings-dialog.component';
import { ContactClientBottomSheetComponent } from './fixers/contact-client-bottom-sheet/contact-client-bottom-sheet.component';
@NgModule({
  declarations: [
    ClientLandingPageComponent,
    SearchDialogComponent,
    ViewAllFixersComponent,
    ViewFixerProfileDialogComponent,
    ViewRatingsDialogComponent,
    ContactClientBottomSheetComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GoogleMapsModule
  ]
})
export class ClientModule { }
