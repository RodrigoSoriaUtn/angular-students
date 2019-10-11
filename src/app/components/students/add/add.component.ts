import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { StudentApiService } from 'src/app/services/student-api.service';

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
  address : String

  constructor(private studentService : StudentService,
    private studentApiService : StudentApiService) { }

  ngOnInit() {

  }

  addStudent() {
      console.log("Adding a student!");
      let student = new Student();
      student.firstName = this.name;
      student.lastName = this.surName;
      student.email = this.email;
      student.dni = this.dni;
      student.address = this.address;
      student.careerId = 1;

      //this.studentService.addStudent(student);
      this.studentApiService.insertStudent(student)
        .then(resp => {
          console.log("student inserted OK!");
          this.clear();
        })
        .catch(errorMessage => {
          console.log("Error when inserting student");
          console.log(errorMessage);
        });
  }

  clear() {
    this.name = "";
    this.surName = "";
    this.email = "";
    this.dni = null;
    this.address = "";
  }

}
