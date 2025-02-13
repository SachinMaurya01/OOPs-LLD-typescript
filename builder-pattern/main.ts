import { Director } from './Director';
import { EngineeringStudentBuilder } from './EngineeringStudentBuilder';
import { MBAStudentBuilder } from './MBAStudentBuilder';

class Client {

  public static main(): void {
    console.log('Builder Pattern');
    console.log('----------------');
    console.log('');

    console.log('Creating a MBA Student');
    let mbaStudent = new Director(new MBAStudentBuilder()).createStudent();
    console.log(mbaStudent.toString());
    console.log('');

    console.log('Creating a Engineering Student');
    let engineeringStudent = new Director(new EngineeringStudentBuilder()).createStudent();
    console.log(engineeringStudent.toString());
  }
}

Client.main();