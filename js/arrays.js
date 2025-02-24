"use strict";
var carMakeer = ['ford', 'toyota', 'chevy'];
var dates = [new Date(), new Date()];
var carsByMake = [['f150'], ['corolla'], ['camaro']];
// Help with inference when extracting values
var cars = carMakeer[0];
var myCar = carMakeer.pop();
// Prevent incompatible values
// carMakeer.push(100); // Error
// Help with 'map': autocomplete  and type checking
carMakeer.map(function (car) {
    return car.toUpperCase();
});
// Flexible types
