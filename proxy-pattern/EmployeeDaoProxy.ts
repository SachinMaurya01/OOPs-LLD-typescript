import { EmployeeDao } from './EmployeeDao';
import { EmployeeDaoImpl } from './EmployeeDaoImpl';
import { EmployeeDo } from './EmployeeDo';

export class EmployeeDaoProxy implements EmployeeDao {
  private employeeDao: EmployeeDao;

  constructor() {
    this.employeeDao = new EmployeeDaoImpl();
  }

  public create(client: string, obj: EmployeeDo): void {
    if(client !== 'admin') {
      console.log('Client not authorized to create employee');
      return;
    }
    console.log('Proxy: create');
    this.employeeDao.create(client, obj);
  }

  public delete(client: string, id: Number): void {
    if(client !== 'admin') {
      console.log('Client not authorized to delete employee');
      return;
    }
    console.log('Proxy: delete');
    this.employeeDao.delete(client, id);
  }

  public get(client: string, id: Number): EmployeeDo|null {
    if(client !== 'admin') {
      console.log('Client not authorized to get employee');
      return null;
    }
    console.log('Proxy: get');
    return this.employeeDao.get(client, id);
  }
}