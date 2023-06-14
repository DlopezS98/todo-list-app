import Stripe from "stripe";

export default class StripeProductModel {
  id: string = '';
  name: string = '';
  description: string = '';
  price: number = 0;
  priceId: string = '';
  priceType: string = '';
  interval: string = '';
  periodDays: number | null = null;
  type: string = '';

  static fromStripeProduct(product: Stripe.Product): StripeProductModel {
    const model = new StripeProductModel();
    model.id = product.id;
    model.name = product.name;
    model.description = product.description ?? '';
    const price = typeof product.default_price === 'string' ? product.default_price : product.default_price?.unit_amount;
    if (price) {
      model.price = typeof price === 'string' ? 0 : price;
      model.priceId = typeof product.default_price === 'object' ? product.default_price?.id ?? ''  : typeof price === 'string' ? price : '';
      model.priceType = typeof product.default_price === 'object' ? product.default_price?.type ?? '' : '';
      model.periodDays = typeof product.default_price === 'object' ? product.default_price?.recurring?.trial_period_days ?? null : null;
      model.interval = typeof product.default_price === 'object' ? product.default_price?.recurring?.interval ?? '' : '';
    }

    model.type = product.type;
    model.price = model.price
    return model;
  }
}