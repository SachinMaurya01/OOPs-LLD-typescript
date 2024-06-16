class vehicle {
  protected honk(): void {
    console.log('beep');
  }
  drive(): void {
    console.log('vroom');
  }
}

class carss extends vehicle {
  drive(): void {
    console.log('zoom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const carTwo = new carss();
carTwo.startDrivingProcess();
