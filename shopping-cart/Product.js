"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var ProductType_1 = require("./ProductType");
var Product = /** @class */ (function () {
    function Product(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getType = function () {
        return ProductType_1.ProductType[this.type];
    };
    Product.prototype.getTypeEnum = function () {
        return this.type;
    };
    return Product;
}());
exports.Product = Product;
