import { PaymentFlow } from "./PaymentFlow";


export class Payment {
  private amount: number;
  private paymentMethod: PaymentFlow;

  constructor(amount: number, paymentMethod: PaymentFlow) {
    this.amount = amount;
    this.paymentMethod = paymentMethod;
  }

  public getAmount(): number {
    return this.amount;
  }

  public getPaymentMethod(): PaymentFlow {
    return this.paymentMethod;
  }

  public pay(): void {
    this.paymentMethod.processPayment();
  }
}