"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var FixedDiscount_1 = require("./FixedDiscount");
var Item1_1 = require("./Item1");
var item2_1 = require("./item2");
var PercentageDiscount_1 = require("./PercentageDiscount");
var ProductType_1 = require("./ProductType");
var TypeDiscount_1 = require("./TypeDiscount");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    ShoppingCart.main = function () {
        var cart = new Cart_1.Cart();
        var product1 = new Item1_1.Item1('product1', 1000, ProductType_1.ProductType.ELECTRONICS);
        var product2 = new item2_1.Item2('product2', 2000, ProductType_1.ProductType.CLOTHING);
        cart.addProduct(new FixedDiscount_1.FixedDiscount(new PercentageDiscount_1.PercentageDiscount(new TypeDiscount_1.TypeDiscount(product1), 10), 10)); // 1000 * 0.9 * 0.9 = 810
        cart.addProduct(new FixedDiscount_1.FixedDiscount(new PercentageDiscount_1.PercentageDiscount(new TypeDiscount_1.TypeDiscount(product2), 10), 10));
        ;
        console.log(cart.getTotalPrice()); // 2814
    };
    return ShoppingCart;
}());
ShoppingCart.main();
