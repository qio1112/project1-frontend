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

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      password: new FormControl(null, {validators: [Validators.required]})
    });
  }

  onLogin() {
    this.authService.loginUser(new User(this.form.value.username, this.form.value.password, null, null));
  }

}
