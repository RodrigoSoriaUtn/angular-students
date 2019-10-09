import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentApiService } from 'src/app/services/student-api.service';

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

  constructor(private studentService : StudentService, 
    private studentApiService : StudentApiService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.studentId = Number(this.route.snapshot.paramMap.get('id'))
    //let student = this.studentService.getById(this.studentId)
    this.studentApiService.getStudentById(this.studentId)
      .then((result : any) => {
        this.name = result.firstName
        this.surName = result.lastName
        this.completeName = this.name + " " + this.surName
        this.email = result.email
        this.dni = result.dni
      })
      .catch(message => {
        console.log("Error from api get by id : " + message)
        this.router.navigate(['/list'])
      })
  }

  editStudent() {
      console.log("Editing a student!");
      let student = new Student();
      student.studentId = this.studentId;
      student.firstName = this.name;
      student.lastName = this.surName;
      student.email = this.email;
      student.dni = this.dni;

      //this.studentService.editStudent(student)
      this.studentApiService.updateStudent(student)
      this.clear();
      this.router.navigate(['/list'])
  }

  clear() {
    this.name = "";
    this.surName = "";
    this.email = "";
    this.dni = null;
  }

}
