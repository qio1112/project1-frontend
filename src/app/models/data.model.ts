import { Project } from './project.model';

/**
 * data mapping class for data table
 */
export class Data {
  project: Project;
  resourceCode: string;
  columnName: string;
  value: string;
  type: string;

  constructor(
    project: Project,
    resourceCode: string,
    columnName: string,
    value: string,
    type: string
  ) {
    this.project = project;
    this.resourceCode = resourceCode;
    this.columnName = columnName;
    this.value = value;
    this.type = type;
  }
}
