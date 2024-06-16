const carMakeer: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const cars = carMakeer[0];
const myCar = carMakeer.pop();

// Prevent incompatible values
// carMakeer.push(100); // Error

// Help with 'map': autocomplete  and type checking
carMakeer.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types