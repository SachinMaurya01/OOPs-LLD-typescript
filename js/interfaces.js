"use strict";
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My drink has ".concat(this.sugar, " grams of sugar");
    }
};
var printVehicle = function (vehicle) {
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
printVehicle(drink1);
