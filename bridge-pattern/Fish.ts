import { BreatheImplementor } from './BreatheImplementor';
import { LivingThing } from "./LivingThing";

export class Fish extends LivingThing {
  constructor(breatheImplementor: BreatheImplementor) {
    super(breatheImplementor);
  }

  breathe() {
    console.log('Fish is breathing');
    this.breatheImplementor.breathe();
  }
}