import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { StudentApiService } from 'src/app/services/student-api.service'
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentList : Array<Student>

  constructor(private studentService : StudentService, 
    private studentsApiService : StudentApiService) { }

  ngOnInit() {
    //this.studentList = this.studentService.getAll()
    this.studentsApiService.getAll()
      .then((data : any) => {
        console.log(data)
        this.studentList = data
      })
      .catch(message => console.log(message)) 
  }

  public removeStudent(id) {
    console.log("actually not working. The api does not have an endpoint")
    //this.studentService.deleteStudentById(id)
    //this.studentList = this.studentService.getAll();
  }

}
