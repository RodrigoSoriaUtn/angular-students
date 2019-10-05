import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentList : Array<Student>

  constructor(private studentService : StudentService) { }

  ngOnInit() {
    this.studentList = this.studentService.getAll();
  }

}
