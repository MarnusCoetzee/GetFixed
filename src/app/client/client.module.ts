import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientLandingPageComponent } from './client-landing-page/client-landing-page.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ClientLandingPageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule { }
