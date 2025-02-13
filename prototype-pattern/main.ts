import { Student } from './Student';

class MainClass {
    public static main(): void {
      const originalStudent = new Student(1, 20, 'John Doe', 'John Doe Sr.', 'Jane Doe', ['Math', 'Physics']);
      console.log(originalStudent.toString());
  
      const clonedStudent = originalStudent.clone();
      console.log(clonedStudent.toString());
  
      // Modify the cloned student
      clonedStudent.name = 'Jane Doe';
      clonedStudent.rollNumber = 2;
      console.log(clonedStudent.toString());
  
      // Display the original student to show it remains unchanged
      console.log(originalStudent.toString());
    }
}

MainClass.main();