import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedSubscriptionRoutingModule } from './nested-subscription-routing.module';
import { NestedSubscriptionComponent } from './nested-subscription.component';


@NgModule({
  declarations: [
    NestedSubscriptionComponent
  ],
  imports: [
    CommonModule,
    NestedSubscriptionRoutingModule
  ]
})
export class NestedSubscriptionModule { }
