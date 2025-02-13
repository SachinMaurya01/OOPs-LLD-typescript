import { Pizza } from '../abstract-classes/Pizza';

export class VegDelight extends Pizza {
  public cost(): number {
    return 250;
  }
}