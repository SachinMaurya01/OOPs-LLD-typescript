import { StudentBuilder } from './StudentBuilder';

export class EngineeringStudentBuilder extends StudentBuilder {
  constructor() {
    super();
  }

  public setSubjects(): StudentBuilder {
    let engineeringSubjects = ['DSA', 'DBMS', 'OS', 'OOP', 'Maths'];
    this.subjects = engineeringSubjects;
    return this;
  }

}