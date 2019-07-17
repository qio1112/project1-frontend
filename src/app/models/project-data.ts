import { Project } from './project.model';
import { Data } from './data.model';
import { Resource } from './resource.model';

/**
 * data mapping class for all data of projects (resources)
 */

export class ProjectData {
  project: Project;
  dataArray: Data[];
  resources: Resource[];

  constructor (project: Project, dataArray: Data[], resources: Resource[]) {
    this.project = project;
    this.dataArray = dataArray;
    this.resources = resources;
  }
}
