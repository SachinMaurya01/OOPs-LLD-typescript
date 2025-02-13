import { Pizza } from "../abstract-classes/Pizza";
import { ToppingDecorator } from "../abstract-classes/ToppingDecorator";

export class Mushroom extends ToppingDecorator {
  constructor(pizza: Pizza) {
    super(pizza);
  }
  public cost(): number {
    return this.pizza.cost() + 30;
  }
}