import { Shape } from './interfaces/Shape';

export class Rectangle implements Shape {
  draw(): void {
    console.log('Inside Rectangle::draw() method.');
  }
}