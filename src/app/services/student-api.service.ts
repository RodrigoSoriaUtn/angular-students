import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  private apiUrl = "https://utn2019-avanzada2-tp8.herokuapp.com/api/students"
  private httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  private studentObservable : Observable<Student[]>

  constructor( private http : HttpClient) { }

  insertStudent(student : Student) {
    return this.http.post(this.apiUrl, student, this.httpOptions).toPromise();
  }

  updateStudent(student : Student) {
    return this.http.patch(this.apiUrl, student, this.httpOptions).toPromise()
  }

  getStudentById(studentId : Number) {
    console.log("Getting student with id : " + studentId)
    return this.http.get(this.apiUrl + "/" + studentId, this.httpOptions).toPromise()
  }

  getAll() {
    console.log("Getting students");
    return this.http.get(this.apiUrl, this.httpOptions).toPromise()
  }

}
