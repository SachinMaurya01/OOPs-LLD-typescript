import { EngineeringStudentBuilder } from './EngineeringStudentBuilder';
import { Student } from './Student';
import { StudentBuilder } from './StudentBuilder';


export class Director {
  private studentBuilder: StudentBuilder;

  constructor(studentBuilder: StudentBuilder) {
    this.studentBuilder = studentBuilder;
  }

  public createStudent(): Student {
    if(this.studentBuilder instanceof EngineeringStudentBuilder) {
      return this.createEngineeringStudent();
    }else{
      return this.createMBAStudent();
    }
  }

  private createEngineeringStudent(): Student {
    return this.studentBuilder.setRollNumber(1).setAge(20).setName('John Doe').setFatherName('John Doe Jr.').setMotherName('Jane Doe').setSubjects().build();
  }

  private createMBAStudent(): Student {
    return this.studentBuilder.setRollNumber(2).setAge(22).setName('Jane Doe 2').setFatherName('John Doe Sr.').setMotherName('Jane Doe 2').setSubjects().build();
  }
}