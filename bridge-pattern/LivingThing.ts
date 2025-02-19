import { BreatheImplementor } from './BreatheImplementor';

export abstract class LivingThing {
  breatheImplementor: BreatheImplementor;

  constructor(breatheImplementor: BreatheImplementor) {
    this.breatheImplementor = breatheImplementor;
  }

  breathe() {
    this.breatheImplementor.breathe();
  }

}