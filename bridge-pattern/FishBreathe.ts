import { BreatheImplementor } from "./BreatheImplementor";

export class FishBreathe implements BreatheImplementor {
  breathe() {
    console.log('inhale O2, exhale CO2');
    console.log('breathe through gills');
  }
}