import { Shape } from './Shape';

export class Dot implements Shape {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Dot at (${this.x}, ${this.y})`);
  }
}