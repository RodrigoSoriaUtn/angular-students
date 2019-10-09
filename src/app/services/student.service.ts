import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  id = 0
  students = new Array<Student>()

  constructor() { 
    let student = new Student();
    student.firstName = "Ramuel Melon"
    student.lastName = "coton"
    student.dni = 19282372
    student.email = "Remuelcoton@coton.com"
    this.addStudent(student)

    let student2 = new Student();
    student2.firstName = "Cristobal"
    student2.lastName = "colon"
    student2.dni = 255311142
    student2.email = "cristco@lon.com"
    this.addStudent(student2)

    let student3 = new Student();
    student3.firstName = "Clerk Richard"
    student3.lastName = "Menton"
    student3.dni = 560093821
    student3.email = "Clerck.m@hotmail.com"
    this.addStudent(student3)
  }

  public addStudent(student : Student) {
    this.id++
    student.studentId = this.id
    this.students.push(student)
  }

  public getAll() {
    return this.students;
  }

  public getById(id : Number) {
    return this.students.filter( (s) => s.studentId == id)[0]
  }

  public deleteStudentById(id : Number) {
    this.students = this.students.filter((v) => v.studentId != id)
  }

  public editStudent(student : Student) {
    let studentFromList = this.getById(student.studentId)
    studentFromList.firstName = student.firstName
    studentFromList.lastName = student.lastName
    studentFromList.email = student.email
    studentFromList.dni = student.dni
  }

}
