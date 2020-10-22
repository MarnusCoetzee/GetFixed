import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixerRoutingModule } from './fixer-routing.module';
import { FixerComponent } from './fixer.component';


@NgModule({
  declarations: [FixerComponent],
  imports: [
    CommonModule,
    FixerRoutingModule
  ]
})
export class FixerModule { }
