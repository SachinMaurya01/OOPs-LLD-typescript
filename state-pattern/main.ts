import { IdleState } from "./IdleState";
import { VendingMachine } from "./VendingMachine";
import { WorkingState } from "./WorkingState";


class StatePattern {
  static main(): void {
    console.log('State Pattern');
    const vendingMachine = new VendingMachine(new IdleState());
    const vendingMachine2 = new VendingMachine(new WorkingState());
    const vendingState1 = vendingMachine.insertCoin();
    const vendingState2 = vendingMachine2.insertCoin();
    vendingMachine.dispense();
    vendingMachine2.dispense();
  }
}

StatePattern.main();