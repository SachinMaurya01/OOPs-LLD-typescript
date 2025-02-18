import { EmployeeDo } from './EmployeeDo';
export class EmployeeDaoImpl {
  
  public create(client: string, obj: EmployeeDo): void {
    console.log('Creating employee');
  }

  public delete(client: string, id: Number): void {
    console.log('Deleting employee');
  }

  public get(client: string, id: Number): EmployeeDo|null {
    console.log('Getting employee');
    return new EmployeeDo(1, 'John Doe', 'Developer');
  }
}