const add = (a: number, b: number): number => {
  return a + b;
};

// Inferred return type
const subtract = (a: number, b: number) => {
  a - b;
};

// Inferred return type
function divide(a: number, b: number): number {
  return a / b;
}

// Inferred return type
const multiply = function(a: number, b: number): number {
  return a * b;
};

// Inferred return type
const logger = (message: string): void => {
  console.log(message);
} 

// Inferred return type
const throwError = (message: string): never => {
  throw new Error(message);
}

// Inferred return type
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// Inferred return type
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
