import { TreeType } from './TreeType';

export class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  public static getTreeType(name: string, color: string, texture: string): TreeType {
    let type = this.treeTypes.get(name);
    if (!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.set(name, type);
    }
    return type;
  }
}