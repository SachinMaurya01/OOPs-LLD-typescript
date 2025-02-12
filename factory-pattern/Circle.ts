import { Shape } from './interfaces/Shape';

export class Circle implements Shape {
  draw(): void {
    console.log('Inside Circle::draw() method.');
  }
}