import { TreeType } from './TreeType';

export class Tree {
  x: number;
  y: number;
  type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  public draw(): void {
    this.type.draw(this.x, this.y);
  }
}