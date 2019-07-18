import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  private projects: Project[];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(result => {
      this.projects = result.data;
    });
  }

}
