import { ProductType } from "./ProductType";

export abstract class Product {
  private name: string;
  protected price: number;
  protected type: ProductType;

  constructor(name: string, price: number, type: ProductType) {
    this.name = name;
    this.price = price;
    this.type = type;
  }

  public abstract getPrice(): number;

  public getName(): string{
    return this.name;
  }

  public getType(): string {
    return ProductType[this.type];
  }

  public getTypeEnum(): ProductType {
    return this.type;
  }
}