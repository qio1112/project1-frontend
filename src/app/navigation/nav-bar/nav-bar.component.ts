import { Component, OnInit, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
    trigger('showList', [
      state('show', style({
        position: 'absolute',
        top: '80px',
        bottom: 0,
        left: 0,
        right: 0
      })),
      state('hide', style({
        position: 'absolute',
        top: '80px',
        bottom: 0,
        left: '-330px',
        right: 0
      })),
      transition('show <=> hide', animate(500))
    ]),
    trigger('rotateArrow', [
      state('show', style({
        transform: 'rotate(90deg)'
      })),
      state('hide', style({
        transform: 'rotate(-90deg)'
      })),
      transition('show <=> hide', animate(500))
    ])
  ]
})
export class NavBarComponent implements OnInit {
  @ViewChild('sideBar', null)
  private sideBarElement: ElementRef;


  private showList = false;
  private showState = 'hide';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onChangeShowListStatus() {
    this.showList = !this.showList;
    this.showState = this.showState === 'show' ? 'hide' : 'show';
  }

  @HostListener('document:click', ['$event.target'])
  onClickAnywhere(pos: ElementRef) {
    if (!this.sideBarElement.nativeElement.contains(pos)) {
      this.showList = false;
      this.showState = 'hide';
    }
  }
}
