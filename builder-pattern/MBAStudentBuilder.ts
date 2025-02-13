import { StudentBuilder } from "./StudentBuilder";

export class MBAStudentBuilder extends StudentBuilder {
  constructor() {
    super();
  }

  public setSubjects(): StudentBuilder {
    let mbaSubjects = ['Marketing', 'Finance', 'HR', 'Operations', 'IT'];
    this.subjects = mbaSubjects;
    return this;
  }
}