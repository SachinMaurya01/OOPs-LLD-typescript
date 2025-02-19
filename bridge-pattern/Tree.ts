import { BreatheImplementor } from './BreatheImplementor';
import { LivingThing } from "./LivingThing";

export class Tree extends LivingThing {
  constructor(breatheImplementor: BreatheImplementor) {
    super(breatheImplementor);
  }

  breathe() {
    console.log('Tree is breathing');
    this.breatheImplementor.breathe();
  }
}