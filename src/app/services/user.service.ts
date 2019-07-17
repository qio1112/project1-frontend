import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private user: User;

  constructor(
    private authService: AuthService
  ) { }

  getUser() {
    return this.authService.getUser();
  }
}
