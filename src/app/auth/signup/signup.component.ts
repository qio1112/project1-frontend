import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private form: FormGroup;
  private doDuplicatedUsernameExists = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      name: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
      confirmPassword: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]})
    });
  }

  onSignUp() {
    this.authService.createUser(new User(this.form.value.username, this.form.value.password, this.form.value.name, new Date()),
      (error) => {
        if (error.status === 409) {
          this.doDuplicatedUsernameExists = true;
          this.form.get('username').setValue(null);
        }
      });
  }

  onChangeUsernameInput() {
    this.doDuplicatedUsernameExists = false;
  }

}
