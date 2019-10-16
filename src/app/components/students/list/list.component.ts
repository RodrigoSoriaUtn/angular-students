import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentApiService } from 'src/app/services/student-api.service'
import { Student } from 'src/app/models/student';
import { StudentListDTO } from 'src/app/dto/student-list-dto';
import { Career } from 'src/app/models/career';
import { CareersService } from 'src/app/services/career/careers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  careersMap : Map<Number, Career>
  studentList : Array<StudentListDTO>

  constructor(private studentService : StudentService, 
    private studentsApiService : StudentApiService,
    private careersService : CareersService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    await this.loadCareers();
    await this.loadStudents();
  }
  
  async loadCareers() {
    this.careersService.getAll()
    .then((response : any) => {
      response.
    })
    .catch(error => {

    }) 
  }

  async loadStudents() {
    //this.studentList = this.studentService.getAll()
    this.studentsApiService.getAll()
      .then((data : any) => {
        console.log(data)
        this.studentList = data
      })
      .catch(message => console.log(message)) 
  }

  public removeStudent(id) {
    console.log("actually not working. The api does not have a delete endpoint")
    //this.studentService.deleteStudentById(id)
    //this.studentList = this.studentService.getAll();
  }

}
