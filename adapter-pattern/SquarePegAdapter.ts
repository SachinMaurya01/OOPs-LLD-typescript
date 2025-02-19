import { RoundPeg } from './RoundPeg';
import { SquarePeg } from './SquarePeg';

export class SquarePegAdapter extends RoundPeg {
  private squarePeg: SquarePeg;

  constructor(squarePeg: SquarePeg) {
    super(squarePeg.getWidth() * Math.sqrt(2) / 2);
    this.squarePeg = squarePeg;
  }

  getRadius(): number {
    return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
  }
}