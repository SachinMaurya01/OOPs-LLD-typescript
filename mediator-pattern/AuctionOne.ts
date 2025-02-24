import { Colleague } from './Colleage';
import { Mediator } from './Mediator';

export class AuctionOne implements Mediator {
  private bidders: Colleague[] = [];

  public placeBid(bid: number, bidder: Colleague): void {
    this.bidders.forEach(b => {
      if (b !== bidder) {
        b.receiveBidNotification(bid);
      }
    });
  }

  public addBidder(bidder: Colleague): void {
    this.bidders.push(bidder);
  }
}