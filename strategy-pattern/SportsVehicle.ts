import { SportsDriveStrategy } from './SportsDriveStrategy';
import { Vehicle } from './Vehicle';

export class SportsVehicle extends Vehicle {
  constructor() {
    super(new SportsDriveStrategy());
  }
}