import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  private urlApi = "https://utn2019-avanzada2-tp8.herokuapp.com/api/careers"
  private httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  public getAll() {
    console.log("Obtaining careers")
    return this.httpClient.get(this.urlApi, this.httpOptions)
  }

}
