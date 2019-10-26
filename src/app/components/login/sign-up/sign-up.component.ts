import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { UserDto } from 'src/app/dto/login/user-dto';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signInFormGroup : FormGroup

  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.signInFormGroup = new FormGroup({
      'email' : new FormControl(null, 
        [Validators.required, Validators.email]),
      'password' : new FormControl(null,
        [Validators.required, Validators.pattern('^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$')])
    })
  }

  async onSubmit() {
      let userDto = new UserDto(this.signInFormGroup.get('email').value, this.signInFormGroup.get('password').value);
      this.loginService.signUp(userDto)
        .then(resp => {
          console.log("account created ! : " + resp)
        }).catch(error => {
          console.log("Error when siging up : ")
          console.log(error)
        })
  }

  get email() { return this.signInFormGroup.get('email') }
  get password() { return this.signInFormGroup.get('password') }
  

}
