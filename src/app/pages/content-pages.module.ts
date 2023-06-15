import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import SubscriptionsComponent from './subscriptions/subscriptions.component';
import { ContentPagesRoutingModule } from './content-pages-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [SubscriptionsComponent],
  imports: [ContentPagesRoutingModule, CommonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class ContentPagesModule { }
