import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SubscriptionsComponent from './subscriptions/subscriptions.component';

const routes: Routes = [
  { path: 'subscriptions', component: SubscriptionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentPagesRoutingModule { }
