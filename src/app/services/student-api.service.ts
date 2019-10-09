import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  private apiUrl = "https://utn2019-avanzada2-tp8.herokuapp.com/api/students"
  private httpHeaders;

  private studentObservable : Observable<Student[]>

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

  getAll() {
    console.log("Getting students");
    return this.http.get(this.apiUrl, this.httpHeaders).toPromise()
  }

}
