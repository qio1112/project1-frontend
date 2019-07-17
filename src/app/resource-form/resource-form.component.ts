import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {
  private projects: Project[];

  constructor(
    private resourceService: ResourceService
  ) { }

  ngOnInit() {
    this.resourceService.getAllProjects()
      .subscribe(result => {
        console.log(result);
      });
  }

  // onGetProjects() {
  //   this.resourceService.getAllProjects()
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  // }

}
