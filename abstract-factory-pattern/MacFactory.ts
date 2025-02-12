import { MacButton } from "./MacButton";
import { MacCheckbox } from "./MacCheckbox";

export class MacFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}