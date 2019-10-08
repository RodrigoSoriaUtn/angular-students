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
    student.name = "Ramuel Melon"
    student.surName = "coton"
    student.age = 34
    student.dni = 19282372
    student.email = "Remuelcoton@coton.com"
    this.addStudent(student)

    let student2 = new Student();
    student2.name = "Cristobal"
    student2.surName = "colon"
    student2.age = 56
    student2.dni = 255311142
    student2.email = "cristco@lon.com"
    this.addStudent(student2)

    let student3 = new Student();
    student3.name = "Clerk Richard"
    student3.surName = "Menton"
    student3.age = 19
    student3.dni = 560093821
    student3.email = "Clerck.m@hotmail.com"
    this.addStudent(student3)
  }

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

  public deleteStudentById(id : Number) {
    this.students = this.students.filter((v) => v.id != id)
  }

  public editStudent(student : Student) {
    let studentFromList = this.getById(student.id)
    studentFromList.name = student.name
    studentFromList.surName = student.surName
    studentFromList.email = student.email
    studentFromList.dni = student.dni
    studentFromList.age = student.age
  }

}
