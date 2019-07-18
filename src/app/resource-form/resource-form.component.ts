import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { ProjectData } from '../models/project-data';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent implements OnInit {
  private projects: Project[];

  private projectData: ProjectData;

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    const projectData = this.projectService.getDataByRange(1, 10)
    .subscribe(result => {
      this.projectData = result;
      console.log(this.projectData);
    });
  }

  // onGetProjects() {
  //   this.resourceService.getAllProjects()
  //     .subscribe(result => {
  //       console.log(result);
  //     });
  // }

}
