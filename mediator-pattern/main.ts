import { AuctionOne } from './AuctionOne';
import { Bidder } from './Bidder';

class MediatorPattern {
  public static main(): void {
    const auctionOne = new AuctionOne();
    const auctionTwo = new AuctionOne();
    const bidderOne = new Bidder(auctionOne, 'Bidder One');
    const bidderTwo = new Bidder(auctionOne, 'Bidder Two');
    const bidderThree = new Bidder(auctionOne, 'Bidder Three');
    bidderOne.placeBid(100);
    bidderTwo.placeBid(200);
    bidderThree.placeBid(300);
  }
}

MediatorPattern.main();