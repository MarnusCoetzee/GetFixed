import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLandingPageComponent } from './client-landing-page/client-landing-page.component';
import { MaterialModule } from '../material.module';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewAllFixersComponent } from './fixers/view-all-fixers/view-all-fixers.component';
import { ViewFixerProfileDialogComponent } from './fixers/view-fixer-profile-dialog/view-fixer-profile-dialog.component';

@NgModule({
  declarations: [
    ClientLandingPageComponent,
    SearchDialogComponent,
    ViewAllFixersComponent,
    ViewFixerProfileDialogComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
