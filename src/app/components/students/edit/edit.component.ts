import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private studentService : StudentService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'))
    let student = this.studentService.getById(this.studentId)
    this.completeName = student.fullName
    this.name = student.name
    this.surName = student.surName
    this.email = student.email
    this.dni = student.dni
    this.age = student.age
  }

  editStudent() {
      console.log("Editing a student!");
      let student = new Student();
      student.id = this.studentId;
      student.name = this.name;
      student.surName = this.surName;
      student.email = this.email;
      student.dni = this.dni;
      student.age = this.age;

      this.studentService.editStudent(student)
      this.clear();
      this.router.navigate(['/list'])
  }

  clear() {
    this.name = "";
    this.surName = "";
    this.email = "";
    this.dni = null;
    this.age = null;
  }

}
