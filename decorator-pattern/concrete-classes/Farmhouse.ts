import { Pizza } from '../abstract-classes/Pizza';

export class Farmhouse extends Pizza {
  public cost(): number {
    return 200;
  }
}
