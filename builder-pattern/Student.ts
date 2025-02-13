import { StudentBuilder } from './StudentBuilder';

export class Student {
  private rollNumber: number;
  private age: number;
  private name: string;
  private fatherName: string;
  private motherName: string;
  private subjects: string[];

  constructor(StudentBuilder: StudentBuilder) {
    this.rollNumber = StudentBuilder.rollNumber;
    this.age = StudentBuilder.age;
    this.name = StudentBuilder.name;
    this.fatherName = StudentBuilder.fatherName;
    this.motherName = StudentBuilder.motherName;
    this.subjects = StudentBuilder.subjects;
  }

  public toString(): string {
    return `Roll Number: ${this.rollNumber}, Name: ${this.name}, Age: ${this.age}, Father's Name: ${this.fatherName}, Mother's Name: ${this.motherName}, Subjects: ${this.subjects}`;
  }

}