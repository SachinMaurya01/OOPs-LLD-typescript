import { VendingMachine } from "./VendingMachine";
import { VendingState } from "./VendingState";
import { WorkingState } from "./WorkingState";


export class IdleState extends VendingState {
  public insertCoin(machine: VendingMachine): VendingState {
    console.log('Coin inserted, transitioning to WorkingState');
    return new WorkingState();
  }
  public dispense(machine: VendingMachine): void {
    console.log('Cannot dispense, no coin inserted');
  }
}