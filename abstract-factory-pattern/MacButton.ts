import { Button } from './interfaces/Button';

export class MacButton implements Button {
  paint() {
    console.log('You have created MacButton.');
  }
}