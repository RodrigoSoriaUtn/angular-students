import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name : String
  surName : String
  email : String
  dni : Number

  constructor(private studentService : StudentService) { }

  ngOnInit() {

  }

  addStudent() {
      console.log("Adding a student!");
      let student = new Student();
      student.firstName = this.name;
      student.lastName = this.surName;
      student.email = this.email;
      student.dni = this.dni;

      this.studentService.addStudent(student);
      this.clear();
  }

  clear() {
    this.name = "";
    this.surName = "";
    this.email = "";
    this.dni = null;
  }

}
