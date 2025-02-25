"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.products = [];
    }
    Cart.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Cart.prototype.getTotalPrice = function () {
        var sum = 0;
        this.products.map(function (x) {
            sum += x.getPrice();
        });
        return sum;
    };
    return Cart;
}());
exports.Cart = Cart;
