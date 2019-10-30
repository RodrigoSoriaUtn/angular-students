import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userToken : String;
  redirectUrl: string;

  constructor() { }

  public isValid(){ 
    return this.userToken; // TODO : should improve logic for user token storage.
  }

}
