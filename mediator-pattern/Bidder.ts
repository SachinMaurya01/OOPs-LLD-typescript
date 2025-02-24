import { Colleague } from './Colleage';
import { Mediator } from './Mediator';

export class Bidder implements Colleague {
  private mediator: Mediator;
  private name: string;

  constructor(mediator: Mediator, name: string) {
    this.mediator = mediator;
    this.name = name;
    this.mediator.addBidder(this);
  }

  public placeBid(bid: number): void {
    console.log(`${this.name} placed a bid of ${bid}`);
    this.mediator.placeBid(bid, this);
  }

  public receiveBidNotification(bid: number): void {
    console.log(`${this.name} received a bid notification of ${bid}`);
  }

  public getName(): string {
    return this.name;
  }
}