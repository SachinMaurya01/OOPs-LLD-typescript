import { Cart } from './Cart';
import { FixedDiscount } from './FixedDiscount';
import { Item1 } from './Item1';
import { Item2 } from './item2';
import { PercentageDiscount } from './PercentageDiscount';
import { ProductType } from './ProductType';
import { TypeDiscount } from './TypeDiscount';

class ShoppingCart {
  static main(): void {
    const cart = new Cart();
    const product1 = new Item1('product1', 1000, ProductType.ELECTRONICS);
    const product2 = new Item2('product2', 2000, ProductType.CLOTHING);
    cart.addProduct(new FixedDiscount(new PercentageDiscount(new TypeDiscount(product1),10),10)); // 1000 * 0.9 * 0.9 = 810-10 = 800
    cart.addProduct(new FixedDiscount(new PercentageDiscount(new TypeDiscount(product2),10),10)); // 2000 * 0.9 * 0.97 - 10
    console.log(cart.getTotalPrice()); // 2536
  }
}

ShoppingCart.main();