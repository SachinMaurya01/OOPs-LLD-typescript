import { NormalVehicle } from './NormalVehicle';
import { SportsVehicle } from './SportsVehicle';

class VehicleImplementation {
  
  driveVehicle() {
    const sportsVehicle = new SportsVehicle();
    sportsVehicle.drive();
  }

  driveVehicleNormally() {
    const normalVehicle = new NormalVehicle();
    normalVehicle.drive();
  }

}

const vehicleImplementation = new VehicleImplementation();
vehicleImplementation.driveVehicle();
vehicleImplementation.driveVehicleNormally();