import { Tree } from './Tree';
import { TreeFactory } from './TreeFactory';

class Forest {
    private trees: Tree[] = [];

    plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const treeType = TreeFactory.getTreeType(name, color, texture);
        const tree = new Tree(x, y, treeType);
        this.trees.push(tree);
    }

    draw(): void {
        this.trees.forEach(tree => tree.draw());
    }
    
}

const forest = new Forest();
forest.plantTree(1, 2, 'pine', 'green', 'smooth');
forest.plantTree(3, 4, 'maple', 'red', 'rough');
forest.plantTree(5, 6, 'pine', 'green', 'smooth');
forest.draw();