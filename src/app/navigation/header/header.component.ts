import { Component, OnInit, HostListener, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('userInfo', null)
  private userInfoElement: ElementRef;
  private isAuth = false;
  private showInfoWindow = false;
  private user: User;

  private authStatusListenerSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authStatusListenerSubscription = this.authService.getAuthStatusListener()
      .subscribe(isAuth => {
        this.isAuth = isAuth;
        if (this.isAuth) {
          this.user = this.authService.getUser();
        }
      });
  }

  ngOnDestroy() {
    this.authStatusListenerSubscription.unsubscribe();
  }

  @HostListener('document:click', ['$event.target']) onMouseClick(pos) {
    if (!this.userInfoElement.nativeElement.contains(pos)) {
      this.showInfoWindow = false;
    }
  }

  onClickUserIcon() {
    if (this.isAuth) {
      this.showInfoWindow = !this.showInfoWindow;
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSignOut() {
    this.authService.logoutUser();
  }
}
