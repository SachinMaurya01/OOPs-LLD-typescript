import { Student } from "./Student";


export abstract class StudentBuilder {
  rollNumber: number;
  age: number;
  name: string;
  fatherName: string;
  motherName: string;
  subjects: string[];

  
  public setRollNumber(rollNumber: number): StudentBuilder{
    this.rollNumber = rollNumber;
    return this;
  }
  public setAge(age: number): StudentBuilder{
    this.age = age;
    return this;
  }
  public setName(name: string): StudentBuilder{
    this.name = name;
    return this;
  }
  public setFatherName(fatherName: string): StudentBuilder{
    this.fatherName = fatherName;
    return this;
  }
  public setMotherName(motherName: string): StudentBuilder{
    this.motherName = motherName;
    return this;
  }
  public abstract setSubjects(): StudentBuilder;

  public build(): Student{
    return new Student(this);
  }
}