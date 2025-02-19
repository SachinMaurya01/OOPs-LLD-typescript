import { BreatheImplementor } from './BreatheImplementor';
import { FishBreathe } from './FishBreathe';
import { Tree } from './Tree';
import { TreeBreathe } from './TreeBreathe';

class BridgePattern {
  static main(): void {
    const treeBreathe: BreatheImplementor = new TreeBreathe();
    const tree = new Tree(treeBreathe);
    tree.breathe();
    const fishBreathe: BreatheImplementor = new FishBreathe();
    const fish = new Tree(fishBreathe);
    fish.breathe();
  }
}

BridgePattern.main();