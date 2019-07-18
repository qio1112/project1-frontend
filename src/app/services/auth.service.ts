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

  private expiresIn: number;
  private tokenTimer: any; // a timer for invalid the stored token

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
  createUser(user: User, errorHandler: any) {
    this.http.post<any>(this.serverUrl + '/auth/signup', user)
      .subscribe(result => {
        console.log(result);
        if (result) {
          this.user = result.data;
          this.router.navigate(['/login']);
        } else {
          throw new Error('failed to signup');
        }
      }, error => {
        errorHandler(error);
      });
  }

  // post request to login user
  loginUser(user: User, errorHandler: any) {
    this.http.post<any>(this.serverUrl + '/auth/login', user)
      .subscribe(res => {
        // get token from header
        if (res.token) {
          this.token = res.token;
          this.expiresIn = +res.expiresIn;
          this.user = res.data;
          this.authStatusListener.next(true);
          this.isAuthenticated = true;

          const now = new Date();
          this.saveAuthToken(this.token, this.user, new Date(now.getTime() + this.expiresIn));
          this.setTokenTimer(this.expiresIn);
          this.router.navigate(['/']);
        }
      }, error => {
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        errorHandler(error);
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
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/login']);
  }

  // auto login if existing a jwt
  autoLogin() {
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      return ;
    }

    const now = new Date();
    const expiration = new Date(localStorage.getItem('expiration'));
    const expiresIn = expiration.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.expiresIn = expiresIn;
      this.setTokenTimer(this.expiresIn);

      const username = localStorage.getItem('username');
      const name = localStorage.getItem('name');
      const memberDate = +localStorage.getItem('memberDate');

      this.token = authToken;
      this.user = new User(username, null, name, new Date(memberDate));
      this.authStatusListener.next(true);
      this.isAuthenticated = true;
      this.router.navigate(['/resource']);
    }
  }

  private setTokenTimer(expiresIn: number) {
    this.tokenTimer = setTimeout(() => this.logoutUser(), expiresIn);
  }

  // save token to local storage
  private saveAuthToken(token: string, user: User, expiration: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('username', user.username);
    localStorage.setItem('name', user.name);
    localStorage.setItem('memberDate', user.memberDate.toString());
    localStorage.setItem('expiration', expiration.toISOString());
  }

  // remove jwt from local storage
  private removeAuthToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('memberDate');
    localStorage.removeItem('expiration');
  }
}
