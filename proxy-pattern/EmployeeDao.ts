import { EmployeeDo } from './EmployeeDo';

export interface EmployeeDao {
  create(client: string, obj: EmployeeDo): void;
  delete(client: string, id: Number): void;
  get(client: string, id: Number): EmployeeDo|null;
}