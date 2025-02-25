import { VendingMachine } from "./VendingMachine";


export abstract class VendingState{
  abstract insertCoin(machine: VendingMachine): VendingState;
  abstract dispense(machine: VendingMachine): void;
}