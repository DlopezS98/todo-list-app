import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StripeService } from 'ngx-stripe';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export default class SubscriptionsComponent {
  private readonly baseUrl = 'http://localhost:3000/stripe'
  constructor(private http: HttpClient, private stripeService: StripeService) { }

  checkout(priceId: string) {
    // Check the server.js tab to see an example implementation
    this.http.post(`${this.baseUrl}/create-checkout-session`, { priceId })
      .pipe(
        switchMap(session => {
          //@ts-ignore
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}
