import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentApiService } from 'src/app/services/student-api.service'
import { Student } from 'src/app/models/student';
import { StudentToListDTO } from 'src/app/dto/student-to-list-dto';
import { Career } from 'src/app/models/career';
import { CareersService } from 'src/app/services/career/careers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  careersMap : Map<Number, Career>
  studentList : Array<StudentToListDTO>

  constructor(private studentService : StudentService, 
    private studentsApiService : StudentApiService,
    private careersService : CareersService) { }

  ngOnInit() {
    this.careersMap = new Map();
    this.studentList = new Array();
    this.loadData();
  }

  async loadData() {
    this.careersMap.set(null, new Career(null, "none", "no description"))
    await this.loadCareers();
  }
  
  async loadCareers() {
    this.careersService.getAll()
      .then((response : any) => {
        response.forEach((career : Career) => {
          this.careersMap.set(career.careerId, career)
        });
        this.loadStudents()
      })
      .catch(error => {
        console.log("An error happened when obtaining careers : " + error)
      })
  }

  async loadStudents() {
    //this.studentList = this.studentService.getAll()
    this.studentsApiService.getAll()
      .then((data : any) => this.onStudentSuccessfulResponse(data))
      .catch(message => console.log(message)) 
  }

  onStudentSuccessfulResponse(data : any) {
    data.forEach( (student : Student) => {
      let career = this.careersMap.get(student.careerId)
      let dto = new StudentToListDTO( student.studentId, 
        student.firstName, student.lastName, student.email, 
        student.dni, student.address, career.name)

      this.studentList.push(dto)
    })
  }

  async removeStudent(id : Number) {
    //this.studentService.deleteStudentById(id)
    this.studentsApiService.deleteStudent(id)
      .then((response : any) => {
        this.removeStudentFromList(id)
      }).catch(error => {
        console.log("An error happened while removing student : ")
        console.log(error)
      })
  }

  async removeStudentFromList (id : Number) {
    this.studentList = this.studentList.filter(e => e.studentId === id)
  }

}
