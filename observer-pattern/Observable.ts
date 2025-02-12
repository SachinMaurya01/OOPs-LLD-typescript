import { ObservableInterface } from './interfaces/ObservableInterface';
import { ObserverInterface } from './interfaces/ObserverInterface';

class Observable implements ObservableInterface{
  data: number;
  observers: ObserverInterface[];

  constructor() {
    this.observers = [];
  }

  add(observer: ObserverInterface): void {
    this.observers.push(observer);
  }

  remove(observer: ObserverInterface): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(): void {
    this.observers.forEach(observer => observer.update(this.data));
  }

  setData(data: number): void {
    this.data = data;
    this.notify();
  }
}