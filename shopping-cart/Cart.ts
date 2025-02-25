import { Product } from './Product';

export class Cart{
  private products: Product[];

  constructor() {
    this.products = [];
  }

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public getTotalPrice(): number {
    let sum = 0;
    this.products.map((x) => {
      sum+= x.getPrice();
    }); 
    return sum;
  }
}