export interface NotificationAlertObserver {
  update(stockCount: number): void;
}