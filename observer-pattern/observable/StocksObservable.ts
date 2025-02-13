import { NotificationAlertObserver } from '../observer/NotificationAlertObserver';

export interface StocksObservable {
  add(observer: NotificationAlertObserver): void;
  remove(observer: NotificationAlertObserver): void;
  notify(): void;
  setStockCount(newStockAdded: number): void;
  getStockCount(): number;
}