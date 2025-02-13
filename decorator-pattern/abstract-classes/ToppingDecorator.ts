import { Pizza } from "./Pizza";

export abstract class ToppingDecorator extends Pizza {
  protected pizza: Pizza;
  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }
  public abstract cost(): number;
}
