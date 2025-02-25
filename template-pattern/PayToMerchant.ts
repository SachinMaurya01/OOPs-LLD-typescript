import { PaymentFlow } from './PaymentFlow';

export class PayToMerchant extends PaymentFlow {
  public validatePayment(): void {
    console.log('Validating payment for merchant');
  }

  public authorizePayment(): void {
    console.log('Authorizing payment for merchant');
  }

  public capturePayment(): void {
    console.log('Capturing payment for merchant');
  }
}