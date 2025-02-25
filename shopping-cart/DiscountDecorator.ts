import { Product } from './Product';

export abstract class DiscountDecorator extends Product {
  protected product: Product;
  constructor(product: Product) {
    super(product.getName(), product.getPrice(), product.getTypeEnum());
    this.product = product;
  }
  public abstract getPrice(): number;
}