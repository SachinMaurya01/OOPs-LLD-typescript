import { DiscountDecorator } from "./DiscountDecorator";
import { Product } from "./Product";


export class TypeDiscount extends DiscountDecorator {
  private discountMap: Map<string, number> = new Map<string, number>();
  constructor(product: Product) {
    super(product);
    this.discountMap.set("electronics", 0.1);
    this.discountMap.set("furniture", 0.05);
    this.discountMap.set("clothing", 0.03);
    console.log(`TypeDiscount created for ${product.getType()}`);
  }

  public getPrice(): number {
    console.log(`Product type: ${this.product.getType()}`);
    console.log(`Product Name: ${this.product.getName()}`);
    const discount = this.discountMap.get(this.product.getType().toString().toLowerCase()) || 0;
    console.log(`Discount applied: ${discount * 100}%`);
    return this.product.getPrice() * (1 - discount);
  }
}