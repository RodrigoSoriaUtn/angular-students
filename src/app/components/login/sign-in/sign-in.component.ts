import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators, AbstractControl, EmailValidator } from '@angular/forms';
import { UserDto } from 'src/app/dto/login/user-dto';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInFormGroup : FormGroup

  constructor(private loginService : LoginService, private userService : UserService, private router : Router) { } 

  ngOnInit() {
    this.signInFormGroup = new FormGroup({
      'email' : new FormControl(null, 
        [Validators.required, Validators.email]),
      'password' : new FormControl(null,
        [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}/)]), 
      'badCredentials' : new FormControl(null)
    })
  }

  async onSubmit() {
    let userDto = new UserDto(this.signInFormGroup.get('email').value, this.signInFormGroup.get('password').value);
    this.loginService.signIn(userDto).subscribe(
      (resp : any) => {
        this.userService.saveToken(resp.jwt)
        this.redirectUserLogged()
      },
      error => {
        if (error.status === 401) {
          this.signInFormGroup.get("badCredentials").setValue("email or password are incorrect");
        } 
      })
  }

  redirectUserLogged() {
    let url = this.userService.redirectUrl
    if (url) {
      this.router.navigateByUrl(url)
    } else {
      this.router.navigateByUrl("/students")
    }
  }

  onSignUpClick() {
    this.router.navigateByUrl("/signup")
  }

  get email() { return this.signInFormGroup.get('email') }
  get password() { return this.signInFormGroup.get('password') }
  
}
