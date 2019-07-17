import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  @Input() private user: User;

  private infoName: string;
  private infoDateString: string;

  constructor() { }

  ngOnInit() {
    this.infoName = this.user.name;
    this.infoDateString = this.parseDateInfoDateString(new Date(this.user.memberDate));
  }

  private parseDateInfoDateString(date: Date) {
    const months = ['January', 'February', 'March',
      'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year = date.getFullYear();
    const month = months[date.getMonth() - 1];
    return month + '-' + year;
  }

}
