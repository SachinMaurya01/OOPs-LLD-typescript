import { GUIFactory } from "./interfaces/GUIFactory";
import { MacFactory } from "./MacFactory";
import { WindowsFactory } from "./WindowsFactory";

class abstractFactoryPattern {
  OS : string;
  constructor(OS: string) {
    this.OS = OS;
  }
  static main(OS: string) {
    let app : GUIFactory
    if(OS === 'Windows') {
      app = new WindowsFactory();
      app.createButton().paint();
      app.createCheckbox().paint();
    }else if(OS === 'Mac') {
      app = new MacFactory();
      app.createButton().paint();
      app.createCheckbox().paint();
    }
    else{
      throw new Error('Error! Unknown OS.');
    }
}
}

console.log(abstractFactoryPattern.main('Windows'));
console.log(abstractFactoryPattern.main('Mac'));