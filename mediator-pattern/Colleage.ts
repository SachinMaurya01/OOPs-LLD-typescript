
export interface Colleague {
  placeBid(bid: number): void;
  receiveBidNotification(bid: number): void;
  getName(): string;
}
