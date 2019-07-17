import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-data-container-bar',
  templateUrl: './data-container-bar.component.html',
  styleUrls: ['./data-container-bar.component.css']
})
export class DataContainerBarComponent implements OnInit {
  private searchInput: string;

  @Input() private mode: string;

  private showPlusSelections = false;

  private showProjectSelections = false;

  @Input() private name: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg'));
    iconRegistry.addSvgIcon('plus', sanitizer.bypassSecurityTrustResourceUrl('assets/images/plus.svg'));
    iconRegistry.addSvgIcon('list', sanitizer.bypassSecurityTrustResourceUrl('assets/images/list.svg'));
    iconRegistry.addSvgIcon('arrowRight', sanitizer.bypassSecurityTrustResourceUrl('assets/images/right-arrow.svg'));
    iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('assets/images/delete.svg'));
  }

  ngOnInit() {
    this.searchInput = "";
  }

  onShowPlusSelections() {
    this.showPlusSelections = !this.showPlusSelections;
  }

  onShowProjectSelections() {
    this.showProjectSelections = !this.showProjectSelections;
  }
}
