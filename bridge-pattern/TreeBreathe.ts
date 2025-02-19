import { BreatheImplementor } from './BreatheImplementor';

export class TreeBreathe implements BreatheImplementor {
  breathe() {
    console.log('inhale CO2, exhale O2');
    console.log('breathe through leaves');
  }
}