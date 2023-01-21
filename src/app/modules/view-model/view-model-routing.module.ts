import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewModelComponent } from './view-model.component';

const routes: Routes = [
  {
    path: '',
    component: ViewModelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewModelRoutingModule { }
