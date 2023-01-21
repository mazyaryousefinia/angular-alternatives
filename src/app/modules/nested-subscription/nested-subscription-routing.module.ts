import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedSubscriptionComponent } from './nested-subscription.component';

const routes: Routes = [
  {
    path: ':user_id',
    component: NestedSubscriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NestedSubscriptionRoutingModule { }
