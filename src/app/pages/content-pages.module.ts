import { NgModule } from '@angular/core';
import SubscriptionsComponent from './subscriptions/subscriptions.component';
import { ContentPagesRoutingModule } from './content-pages-routing.module';


@NgModule({
  declarations: [SubscriptionsComponent],
  imports: [ContentPagesRoutingModule],
  providers: [],
})
export default class ContentPagesModule { }
