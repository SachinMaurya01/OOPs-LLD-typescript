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
exports.Item1 = void 0;
var Product_1 = require("./Product");
var Item1 = /** @class */ (function (_super) {
    __extends(Item1, _super);
    function Item1(name, price, type) {
        return _super.call(this, name, price, type) || this;
    }
    Item1.prototype.getPrice = function () {
        return this.price;
    };
    return Item1;
}(Product_1.Product));
exports.Item1 = Item1;
