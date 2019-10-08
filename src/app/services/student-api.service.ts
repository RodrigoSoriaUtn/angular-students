import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  private apiUrl = "https://utn2019-avanzada2-tp8.herokuapp.com/api/students"
  private httpHeaders;

  constructor( private http : HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  insertStudent() {

  }

  updateStudent(student : Student) {
    
  }

  getStudentById(studentId : Number) {

  }

  getStudents() {
    
  }

}
