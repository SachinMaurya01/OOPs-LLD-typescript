import { Prototype } from "./Prototype";

export class Student implements Prototype{
  constructor(
    public rollNumber: number,
    public age: number,
    public name: string,
    public fatherName: string,
    public motherName: string,
    public subjects: string[]
  ) {}

  clone(): Student {
    return new Student(this.rollNumber, this.age, this.name, this.fatherName, this.motherName, [...this.subjects]);
  }

  public toString(): string {
    return `Roll Number: ${this.rollNumber}, Name: ${this.name}, Age: ${this.age}, Father's Name: ${this.fatherName}, Mother's Name: ${this.motherName}, Subjects: ${this.subjects}`;
  }

}