

export class TreeType {
  name: string;
  color: string;
  texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  public draw(x: number, y: number): void {
    console.log(`Drawing tree of type ${this.name} at (${x}, ${y})`);
  }
}