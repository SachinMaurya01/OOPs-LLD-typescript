import { Product } from './Product';
import { ProductType } from './ProductType';

export class Item1 extends Product {
  constructor(name: string, price: number, type: ProductType) {
    super(name, price, type);
  }

  public getPrice(): number {
    return this.price;
  }
  
}