import { Project } from './project.model';
import { Data } from './data.model';
import { Resource } from './resource.model';

/**
 * data mapping class for all data of projects (resources)
 */

export class ProjectData {
  project: Project;
  data: Data[];
  resource: Resource[];

  constructor (project: Project, data: Data[], resource: Resource[]) {
    this.project = project;
    this.data = data;
    this.resource = resource;
  }
}
