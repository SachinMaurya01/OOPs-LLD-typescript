import { Caretaker } from "./Caretaker";
import { Memento } from "./Memento";
import { Originator } from "./Originator";
import { State } from "./State";

class MementoPattern {
  static main(): void {
    console.log('Memento Pattern');
    let originator = new Originator(new State('state1', 1));
    let caretaker = new Caretaker();
    let snapshot1 = originator.save();
    caretaker.addMemento(snapshot1);
    let originator2 = new Originator(new State('state2', 2));
    let snapshot2 = originator2.save();
    caretaker.addMemento(snapshot2);
    originator.setState(new State('state3', 3));
    console.log(originator.getState());
    originator.restore(caretaker.undo());
    console.log(originator.getState());
    originator.restore(caretaker.undo());
    console.log(originator.getState());

    let memento = new Memento(new State('state4', 4));
    caretaker.addMemento(memento);
    let memento2 = new Memento(new State('state3', 2));
    caretaker.addMemento(memento2);
    let memento3 = new Memento(new State('state2', 2));
    caretaker.addMemento(memento3);
    console.log(caretaker.undo().getState());
  }
}

MementoPattern.main();