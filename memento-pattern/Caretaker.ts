import { Memento } from './Memento';
import { State } from './State';

export class Caretaker {
  private mementos: Memento[] = [];

  public addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.mementos[index];
  }

  public undo(): Memento {
    let newMemento = this.mementos.pop() || new Memento(new State('',0));
    if(newMemento!=null){
      return newMemento;
    }
    return new Memento(new State('',0));
  }
}