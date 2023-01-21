import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModelRoutingModule } from './view-model-routing.module';
import { ViewModelComponent } from './view-model.component';


@NgModule({
  declarations: [
    ViewModelComponent
  ],
  imports: [
    CommonModule,
    ViewModelRoutingModule
  ]
})
export class ViewModelModule { }
