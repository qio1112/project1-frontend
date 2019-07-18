import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private form: FormGroup;

  private loginFailed = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(localStorage.getItem('loginUsername'), {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      rememberMe: new FormControl(localStorage.getItem('rememberMe') === 'true')
    });
  }

  onLogin() {
    if (this.form.get('rememberMe').value) {
      localStorage.setItem('loginUsername', this.form.get('username').value);
      localStorage.setItem('rememberMe', 'true');
      console.log('username stored');
    } else {
      localStorage.removeItem('loginUsername');
      localStorage.setItem('rememberMe', 'false');
      console.log('username removed');
    }
    this.authService.loginUser(new User(this.form.value.username, this.form.value.password, null, null),
      (error) => {
        if (error.status === 404) {
          this.form.get('username').setValue(null);
          this.form.get('password').setValue(null);
          this.loginFailed = true;
        }
      });
  }

  onChangeLoginInput() {
    this.loginFailed = false;
  }

  // onClickRememberMe() {
  //   if (this.form.get('rememberMe').value) {
  //     localStorage.setItem('loginUsername', this.form.get('username').value);
  //     localStorage.setItem('rememberMe', 'true');
  //     console.log('username stored');
  //   } else {
  //     localStorage.removeItem('loginUsername');
  //     console.log('username removed');
  //   }
  // }
}
