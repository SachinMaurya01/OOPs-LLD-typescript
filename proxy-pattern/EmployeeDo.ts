export class EmployeeDo {
  private id: Number;
  private name: string;
  private role: string;
  
  constructor(id: Number, name: string, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
  
  public getId(): Number {
    return this.id;
  }
  
  public getName(): string {
    return this.name;
  }
  
  public getRole(): string {
    return this.role;
  }
}