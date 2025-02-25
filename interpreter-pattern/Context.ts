

export class Context {
  private map: Map<string, number>;

  constructor() {
    this.map = new Map();
  }

  public put(key: string, value: number): void {
    this.map.set(key, value);
  }

  public get(key: string): number|undefined {
    return this.map.get(key);
  }

}