import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  redirectUrl: string;

  constructor() { }

  public isValid() { 
    return localStorage.getItem("jwt");
  }
  
  public saveToken(token) {
    localStorage.setItem("jwt", token)
  }

}
