import { State } from './State';

export class Memento {
  private state: State;
  constructor(state: State) {
    this.state = state;
  }

  public getState(): State {
    return this.state;
  }

  public setState(state: State): void {
    this.state = state;
  }
}