

export abstract class PaymentFlow {
  public processPayment(): void {
    this.validatePayment();
    this.authorizePayment();
    this.capturePayment();
  }

  public abstract validatePayment(): void;

  public abstract authorizePayment(): void;

  public abstract capturePayment(): void;
}