/**
 * data mapping class for project table
 */
export class Project {
  id: number;
  projectName: string;

  constructor(id: number, projectName: string) {
    this.id = id;
    this.projectName = projectName;
  }
}
