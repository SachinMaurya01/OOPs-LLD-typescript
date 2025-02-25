import { VendingMachine } from "./VendingMachine";
import { VendingState } from "./VendingState";


export class WorkingState extends VendingState {
  public insertCoin(machine: VendingMachine): VendingState {
    console.log('Coin already inserted, cannot insert another');
    return this;
  }
  public dispense(machine: VendingMachine): void {
    console.log('Dispensing item, transitioning to IdleState');
  }
}