import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'project1-frontend';
  private isAuth = false;
  private authStatusListenerSubscription: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authStatusListenerSubscription = this.authService.getAuthStatusListener()
      .subscribe(isAuth => {
        this.isAuth = isAuth;
      });
  }

  ngOnDestroy() {
    this.authStatusListenerSubscription.unsubscribe();
  }

}
