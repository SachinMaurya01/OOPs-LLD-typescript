import { Colleague } from './Colleage';

export interface Mediator {
  placeBid(bid: number, bidder: Colleague): void;
  addBidder(bidder: Colleague): void;
}