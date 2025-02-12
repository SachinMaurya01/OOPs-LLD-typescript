import { DriveStrategy } from './interfaces/DriveStrategy';

export class Vehicle{
  private strategy: DriveStrategy;

  constructor(strategy: DriveStrategy){
    this.strategy = strategy;
  }

  drive(): void{
    this.strategy.drive();
  }
}