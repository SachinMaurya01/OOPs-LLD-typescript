import { DriveStrategy } from "./interfaces/DriveStrategy";

export class NormalDriveStrategy implements DriveStrategy {
  drive(): void {
    console.log("Driving normally");
  }
}