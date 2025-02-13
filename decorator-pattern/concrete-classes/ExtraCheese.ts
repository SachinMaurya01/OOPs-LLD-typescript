import { Pizza } from "../abstract-classes/Pizza";
import { ToppingDecorator } from "../abstract-classes/ToppingDecorator";

export class ExtraCheese extends ToppingDecorator {
  constructor(pizza: Pizza) {
    super(pizza);
  }
  public cost(): number {
    return this.pizza.cost() + 50;
  }
}