import { DiscountDecorator } from './DiscountDecorator';
import { Product } from './Product';

export class FixedDiscount extends DiscountDecorator {
  private discount: number;
  constructor(product: Product, discount: number) {
    super(product);
    this.discount = discount;
  }

  public getPrice(): number {
    return this.product.getPrice() - this.discount;
  }
}