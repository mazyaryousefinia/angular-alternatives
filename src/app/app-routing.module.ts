import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'subscription',
    loadChildren: () => import('./modules/subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'data-processing',
    loadChildren: () => import('./modules/data-processing/data-processing.module').then(m => m.DataProcessingModule)
  },
  {
    path: 'nested-subscription',
    loadChildren: () => import('./modules/nested-subscription/nested-subscription.module').then(m => m.NestedSubscriptionModule)
  },
  {
    path: 'view-model',
    loadChildren: () => import('./modules/view-model/view-model.module').then(m => m.ViewModelModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
