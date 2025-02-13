import { Pizza } from '../abstract-classes/Pizza';

export class Margherita extends Pizza {
  public cost(): number {
    return 150;
  }
}