import { Button } from './interfaces/Button';

export class WindowsButton implements Button {
  paint() {
    console.log('You have created WindowsButton.');
  }
}