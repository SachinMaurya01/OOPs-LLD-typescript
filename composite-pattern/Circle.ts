import { Dot } from './Dot';

export class Circle implements Dot {
  radius: number;
  x: number;
  y: number;
  dot: Dot;

  constructor(x: number, y: number, radius: number) {
    this.dot = new Dot(x, y);
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  move(x: number, y: number): void {
    this.dot.move(x, y);
  }

  draw(): void {
    console.log(`Circle at (${this.dot.x}, ${this.dot.y}) with radius ${this.radius}`);
  }
}

