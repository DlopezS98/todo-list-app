import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CheckoutSessionDto from '../dtos/stripe.dto';
import Stripe from 'stripe';

@Injectable({ providedIn: 'root' })
export default class CustomStripeService {
  private readonly baseUrl: string = 'http://localhost:3000/stripe'

  constructor(private readonly http: HttpClient) { }

  createCheckoutSession(priceId: string): Promise<CheckoutSessionDto | undefined> {
    return this.http.post<CheckoutSessionDto>(`${this.baseUrl}/create-checkout-session`, { priceId }).toPromise()
  }

  async getProducts(): Promise<Stripe.Product[]> {
    const products = await this.http.get<Stripe.Product[]>(`${this.baseUrl}/products`).toPromise();
    return products as Stripe.Product[];
  }
}