import { GUIFactory } from "./interfaces/GUIFactory";
import { WindowsButton } from "./WindowsButton";
import { WindowsCheckbox } from "./WindowsCheckbox";

export class WindowsFactory implements GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}