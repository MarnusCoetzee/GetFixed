import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientLandingPageComponent } from './client-landing-page/client-landing-page.component';
import { ViewAllFixersComponent } from './fixers/view-all-fixers/view-all-fixers.component';

const routes: Routes = [
  { path: '', component: ClientLandingPageComponent },
  { path: 'view-all/:query/:validLocation', component: ViewAllFixersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
