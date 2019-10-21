import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        [Validators.required, Validators.pattern('^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$')])
    })
  }

  async onSubmit() {

  }

  get email() { return this.signInFormGroup.get('email') }
  get password() { return this.signInFormGroup.get('password') }
  
}
