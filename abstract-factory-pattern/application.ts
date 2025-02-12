import { Button } from './interfaces/Button';
import { Checkbox } from './interfaces/Checkbox';
import { GUIFactory } from './interfaces/GUIFactory';

export class Application {
  private factory: GUIFactory;
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.factory = factory;
  }

  createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}