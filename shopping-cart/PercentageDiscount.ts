import { DiscountDecorator } from './DiscountDecorator';
import { Product } from './Product';

export class PercentageDiscount extends DiscountDecorator {
  private discountPercentage: number;

  constructor(product: Product, discountPercentage: number) {
    super(product);
    this.discountPercentage = discountPercentage;
  }

  public getPrice(): number {
    return this.product.getPrice() * (1 - this.discountPercentage / 100);
  }
}