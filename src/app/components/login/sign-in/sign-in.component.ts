import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { UserDto } from 'src/app/dto/login/user-dto';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInFormGroup : FormGroup

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.signInFormGroup = new FormGroup({
      'email' : new FormControl(null, 
        [Validators.required, Validators.email]),
      'password' : new FormControl(null,
        [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}")])
    })
  }

  async onSubmit() {
      let userDto = new UserDto(this.signInFormGroup.get('email').value, this.signInFormGroup.get('password').value);
      this.loginService.signIn(userDto)
        .then(resp => {
          console.log("Correctly sign in ! : " + resp)
        }).catch(error => {
          console.log("Error when siging in : ")
          console.log(error)
        })
  }

  get email() { return this.signInFormGroup.get('email') }
  get password() { return this.signInFormGroup.get('password') }
  
}
