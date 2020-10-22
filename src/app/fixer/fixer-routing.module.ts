import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixerComponent } from './fixer.component';

const routes: Routes = [{ path: '', component: FixerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixerRoutingModule { }
