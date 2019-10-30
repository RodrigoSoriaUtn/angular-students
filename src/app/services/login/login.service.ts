import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDto } from 'src/app/dto/login/user-dto';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlSignIn = "https://utn2019-avanzada2-tp8.herokuapp.com/login"
  private urlSignUp = "https://utn2019-avanzada2-tp8.herokuapp.com/sign-up"
  private urlUserEmails = "https://utn2019-avanzada2-tp8.herokuapp.com/users/identities"

  private httpOptions = {
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) {

  }

  signIn(userDto : UserDto) {  
    return this.httpClient.post(this.urlSignIn, userDto, this.httpOptions).toPromise()
  }

  signUp(userDto : UserDto) {
    return this.httpClient.post(this.urlSignUp, userDto, this.httpOptions).toPromise()
  }

  validateUserExistence(email : String) {
    let realUrl = this.urlUserEmails + "?email=" + email
    return this.httpClient.get(realUrl, this.httpOptions).toPromise()
  }

}
