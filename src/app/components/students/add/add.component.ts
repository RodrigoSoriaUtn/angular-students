import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { StudentApiService } from 'src/app/services/student-api.service';
import { CareersService } from 'src/app/services/career/careers.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  student : Student = new Student();
  studentForm : FormGroup

  careers : Array<Career>
  selectedCareer : Career;

  constructor(private studentService : StudentService,
    private studentApiService : StudentApiService, 
    private careerService : CareersService) { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      'firstName' : new FormControl(this.student.firstName,
        [Validators.required, Validators.maxLength(10)]),
      'lastName' : new FormControl(this.student.lastName,
        [Validators.required, Validators.maxLength(15)]),
      'email' : new FormControl(this.student.email,
        [Validators.required, Validators.email]),
      'dni' : new FormControl(this.student.dni,
        [Validators.pattern('^[0-9]*$')]),
      'address' : new FormControl(this.student.address),
      'career' : new FormControl(null)
    }) 


    this.careerService.getAll()
      .then((response : any) => {
        console.log(response);
        this.careers = response;
      })
      .catch(error => {
        console.log(error);
      });
  }

  async onSubmit() {
      console.log("Adding a student!");
      this.prepareStudentToInsert();
      this.insertStudent();
  }

  prepareStudentToInsert() {
    this.student.firstName = this.studentForm.get("firstName").value
      this.student.lastName = this.studentForm.get("lastName").value
      this.student.email = this.studentForm.get("email").value
      this.student.dni = this.studentForm.get("dni").value
      this.student.address = this.studentForm.get("address").value
  }

  insertStudent() {
    //this.studentService.addStudent(student);
    this.studentApiService.insertStudent(this.student)
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
    this.student.firstName = "";
    this.student.lastName = "";
    this.student.email = "";
    this.student.dni = null;
    this.student.address = "";
    this.student.careerId = null;
  }

  get firstName() { return this.studentForm.get("firstName") }
  get lastName() { return this.studentForm.get("lastName") }
  get email() { return this.studentForm.get("email") }
  get dni() { return this.studentForm.get("dni") }
  get address() { return this.studentForm.get("address") }
  get career() { return this.studentForm.get("career") }

}