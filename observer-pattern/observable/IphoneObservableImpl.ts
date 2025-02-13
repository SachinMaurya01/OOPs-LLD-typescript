import { NotificationAlertObserver } from "../observer/NotificationAlertObserver";
import { StocksObservable } from "./StocksObservable";

export class IphoneObservableImpl implements StocksObservable{
    private observers: NotificationAlertObserver[] = [];
    private stockCount: number = 0;

    public add(observer: NotificationAlertObserver): void {
        this.observers.push(observer);
    }

    public remove(observer: NotificationAlertObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notify(): void {
        this.observers.forEach(observer => observer.update(this.stockCount));
    }

    public setStockCount(newStockAdded: number): void {
        if(this.stockCount==0){
          this.notify();
        }
        this.stockCount = this.stockCount + newStockAdded;
    }

    public getStockCount(): number {
        return this.stockCount;
    }
}