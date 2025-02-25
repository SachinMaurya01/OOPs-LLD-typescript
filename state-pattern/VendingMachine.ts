import { VendingState } from './VendingState';

export class VendingMachine {
  private state: VendingState;

  constructor(initialState: VendingState) {
    this.state = initialState;
  }

  public setState(state: VendingState): void {
    this.state = state;
  }

  public insertCoin(): void {
    this.state = this.state.insertCoin(this);
  }

  public dispense(): void {
    this.state.dispense(this);
  }

  public getState(): VendingState {
    return this.state;
  }
}