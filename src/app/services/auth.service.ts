import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  private serverUrl = 'http://localhost:8080/project1';
  private token: string;
  private user: User;
  private username: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }

  getUsername() {
    return this.username;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAuthStatus() {
    return this.isAuthenticated;
  }

  // post request to create a new user, sign up
  createUser(user: User) {
    console.log(user);
    this.http.post<User>(this.serverUrl + '/auth/signup', user)
      .subscribe(result => {
        console.log(result);
        if (result) {
          this.user = result;
          this.router.navigate(['/login']);
        } else {
          throw new Error('failed to signup');
        }
      });
  }

  // post request to login user
  loginUser(user: User) {
    this.http.post<User>(this.serverUrl + '/auth/login', user, {observe: 'response'})
      .subscribe(res => {
        console.log(res);
        // get token from header
        if (res.headers.get('Authentication')) {
          this.token = res.headers.get('Authentication').split(' ')[1];
          this.user = new User(res.body.username, null, res.body.name, new Date(res.body.memberDate));
          this.authStatusListener.next(true);
          this.isAuthenticated = true;
          this.saveAuthToken(this.token, this.user);
          this.router.navigate(['/']);
        }
        console.log(localStorage.getItem('token'));
      }, error => {
        console.log(error);
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
      });
  }

  // logout user
  logoutUser() {
    this.token = null;
    this.user = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    // remove local storage
    this.removeAuthToken()
    this.router.navigate(['/login']);
  }

  // auto login if existing a jwt
  autoLogin() {
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      return ;
    }
    const username = localStorage.getItem('username');
    const name = localStorage.getItem('name');
    const memberDate = +localStorage.getItem('memberDate');
    this.token = authToken;
    this.user = new User(username, null, name, new Date(memberDate));
  }

  // save token to local storage
  private saveAuthToken(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', user.username);
    localStorage.setItem('name', user.name);
    localStorage.setItem('memberDate', user.memberDate.getMilliseconds().toString());
  }

  // remove jwt from local storage
  private removeAuthToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('memberDate');
  }
}
