import { NormalDriveStrategy } from './NormalDriveStrategy';
import { Vehicle } from './Vehicle';

export class NormalVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}