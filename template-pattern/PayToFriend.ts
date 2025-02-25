import { PaymentFlow } from "./PaymentFlow";


export class PayToFriend extends PaymentFlow {
  public validatePayment(): void {
    console.log('Validating payment for pay to friend');
  }

  public authorizePayment(): void {
    console.log('Authorizing payment for pay to friend');
  }

  public capturePayment(): void {
    console.log('Capturing payment for pay to friend');
  }
}