import { StocksObservable } from "../observable/StocksObservable";
import { NotificationAlertObserver } from "./NotificationAlertObserver";

export class EmailAlertObserverImpl implements NotificationAlertObserver {
  obs: StocksObservable;
  emailId: string;
  constructor(obs: StocksObservable, emailId: string) {
    this.obs = obs;
    this.emailId = emailId;
  }

  update() {
    console.log(`Email sent to ${this.emailId} for product in stock.`);
  }

}