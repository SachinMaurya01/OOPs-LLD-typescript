import { Shape } from './Shape';

export class CompoundGraphic implements Shape {
  children: Shape[] = [];

  add(shape: Shape): void {
    this.children.push(shape);
  }

  remove(shape: Shape): void {
    const index = this.children.indexOf(shape);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  move(x: number, y: number): void {
    this.children.forEach(child => child.move(x, y));
  }

  draw(): void {
    this.children.forEach(child => child.draw());
  }
}