import { Project } from './project.model';
import { resource } from 'selenium-webdriver/http';

/**
 * data mapping class for formula_page_data table
 */

export class FormulaPageData {
  project: Project;
  resourceCode: string;
  columnName: string;
  value: string;
  type: string;
  fromResource: number;

  constructor(
    project: Project,
    resourceCode: string,
    columnName: string,
    value: string,
    type: string,
    fromResource: number) {
      this.project = project;
      this.resourceCode = resourceCode;
      this.columnName = columnName;
      this.value = value;
      this.type = type;
      this.fromResource = fromResource;
    }
}
