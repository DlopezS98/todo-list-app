import { NgModule } from '@angular/core';
import { NgxStripeModule } from 'ngx-stripe';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import ContentPagesModule from './pages/content-pages.module';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { HttpClientModule } from '@angular/common/http';

const PUBLISHABLE_STRIPE_KEY = '';

@NgModule({
  declarations: [AppComponent, ContentLayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContentPagesModule,
    NgxStripeModule.forRoot(PUBLISHABLE_STRIPE_KEY)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
