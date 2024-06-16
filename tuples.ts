const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

// This is a tuple. It is an array with a fixed order of elements.
type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40]; // This is an array. It is not a tuple.
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];