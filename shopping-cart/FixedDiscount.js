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
exports.FixedDiscount = void 0;
var DiscountDecorator_1 = require("./DiscountDecorator");
var FixedDiscount = /** @class */ (function (_super) {
    __extends(FixedDiscount, _super);
    function FixedDiscount(product, discount) {
        var _this = _super.call(this, product) || this;
        _this.discount = discount;
        return _this;
    }
    FixedDiscount.prototype.getPrice = function () {
        return this.product.getPrice() - this.discount;
    };
    return FixedDiscount;
}(DiscountDecorator_1.DiscountDecorator));
exports.FixedDiscount = FixedDiscount;
