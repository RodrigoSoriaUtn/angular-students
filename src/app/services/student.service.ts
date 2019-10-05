import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  id = 0
  students = new Array<Student>()

  constructor() { }

  public addStudent(student : Student) {
    this.id++
    student.id = this.id
    this.students.push(student)
  }

  public getAll() {
    return this.students;
  }

  public getById(id : Number) {
    return this.students.filter( (s) => s.id == id)[0]
  }

}
