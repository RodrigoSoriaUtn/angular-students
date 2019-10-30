import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { UserDto } from 'src/app/dto/login/user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpFormGroup : FormGroup

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
    this.signUpFormGroup = new FormGroup({
      'email' : new FormControl(null, 
        [Validators.required, Validators.email],
        [this.emailExistentValidator.bind(this)]),
      'password' : new FormControl(null,
        [Validators.required, Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}/)])
    })
  }

  async onSubmit() {
    let userDto = new UserDto(this.signUpFormGroup.get('email').value, this.signUpFormGroup.get('password').value);
    this.loginService.signUp(userDto)
      .then(resp => {
        this.signIn(userDto);
      }).catch(error => {
        console.log("Error when siging up : ")
        console.log(error)
    })
  }

  async signIn(userDto : UserDto) {
    this.loginService.signIn(userDto)
      .then((resp : any) => {
        this.router.navigateByUrl("/students")
      }).catch((error : any) => {
        console.log("error while sign in on the sign up.")
        console.log(error)
        this.router.navigateByUrl("")
      })
  }

  onSignInClick() {
    this.router.navigateByUrl("")
  }

  get email() { return this.signUpFormGroup.get('email') }
  get password() { return this.signUpFormGroup.get('password') }
  
  // Validators

  emailExistentValidator(control : AbstractControl) {
    return this.loginService.validateUserExistence(control.value).then(resp => {
        return null;
    }).catch(error => {
        console.log("error message from api : ")
        console.log(error)
        if (error.status == 409) {
          return {'emailExistentValidator' : { value : control.value}}
        }
    })
  }

}
