import { ExtraCheese } from "./concrete-classes/ExtraCheese";
import { Margherita } from "./concrete-classes/Margherita";
import { Mushroom } from "./concrete-classes/Mushroom";


let pizza = new ExtraCheese(new Mushroom(new Margherita()));

class PizzaCreator {
  public static createPizza(): void {
    let pizza = new ExtraCheese(new Mushroom(new Margherita()));
    console.log(pizza.cost());
  }
}

PizzaCreator.createPizza(); // Output: 230