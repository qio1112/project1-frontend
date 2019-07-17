import { Project } from './project.model';

/**
 * data mapping class for resource table
 */

export class Resource {
  project: Project;
  resourceCode: string;
  resourceName: string;

  constructor(
    project: Project,
    resourceCode: string,
    resourceName: string
  ) {
    this.project = project;
    this.resourceCode = resourceCode;
    this.resourceName = resourceName;
  }
}
