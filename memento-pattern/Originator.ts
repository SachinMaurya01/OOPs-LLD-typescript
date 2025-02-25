import { Memento } from './Memento';
import { State } from './State';

export class Originator {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  public save(): Memento {
    return new Memento(this.state);
  }

  public restore(memento: Memento): void {
    this.state = memento.getState();
  }
}