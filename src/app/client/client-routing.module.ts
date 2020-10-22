import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLandingPageComponent } from './client-landing-page/client-landing-page.component';

const routes: Routes = [
  { path: '', component: ClientLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
