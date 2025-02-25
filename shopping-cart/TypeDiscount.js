"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDiscount = void 0;
var DiscountDecorator_1 = require("./DiscountDecorator");
var TypeDiscount = /** @class */ (function (_super) {
    __extends(TypeDiscount, _super);
    function TypeDiscount(product) {
        var _this = _super.call(this, product) || this;
        _this.discountMap = new Map();
        _this.discountMap.set("electronics", 0.1);
        _this.discountMap.set("furniture", 0.05);
        _this.discountMap.set("clothing", 0.03);
        console.log("TypeDiscount created for ".concat(product.getType()));
        return _this;
    }
    TypeDiscount.prototype.getPrice = function () {
        console.log("Product type: ".concat(this.product.getType()));
        console.log("Product Name: ".concat(this.product.getName()));
        var discount = this.discountMap.get(this.product.getType().toString().toLowerCase()) || 0;
        console.log("Discount applied: ".concat(discount * 100, "%"));
        return this.product.getPrice() * (1 - discount);
    };
    return TypeDiscount;
}(DiscountDecorator_1.DiscountDecorator));
exports.TypeDiscount = TypeDiscount;
