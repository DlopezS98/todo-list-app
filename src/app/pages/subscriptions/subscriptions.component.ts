import { StripeService } from 'ngx-stripe';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import CustomStripeService from 'src/app/shared/services/stripe.service';
import StripeProductModel from 'src/app/shared/models/stripe-product.model';

@Component({
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export default class SubscriptionsComponent implements OnInit {
  public products: StripeProductModel[] = [];
  clientReferenceId: string = '';
  pricingTableId: string = '';
  publishableKey: string = ''
  
  constructor(
    private readonly cdRef: ChangeDetectorRef,
    private readonly stripeService: StripeService,
    private readonly customStripeService: CustomStripeService,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    const products = await this.customStripeService.getProducts();
    this.products = products.map(StripeProductModel.fromStripeProduct);
    this.cdRef.detectChanges();
  }

  async checkout(priceId: string): Promise<void> {
    if (!priceId) return;

    const checkoutSession = await this.customStripeService.createCheckoutSession(priceId);
    if (!checkoutSession) return;

    await this.stripeService.redirectToCheckout({ sessionId: checkoutSession.sessionId }).toPromise();
  }
}
