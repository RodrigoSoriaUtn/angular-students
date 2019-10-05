import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentId : Number
  completeName : String

  name : String
  surName : String
  email : String
  dni : Number
  age : Number

  constructor(private studentService : StudentService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'))
    this.completeName = this.studentService.getById(this.studentId).fullName
  }

  addStudent() {
      console.log("Editing a student!");
      let student = new Student();
      student.name = this.name;
      student.surName = this.surName;
      student.email = this.email;
      student.dni = this.dni;
      student.age = this.age;

      this.studentService.addStudent(student);
      this.clear();
  }

  clear() {
    this.name = "";
    this.surName = "";
    this.email = "";
    this.dni = null;
    this.age = null;
  }

}
