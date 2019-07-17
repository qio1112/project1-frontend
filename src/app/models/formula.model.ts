import { Project } from './project.model';

/**
 * data mapping class for formula table
 */

export class Formula {
  project: Project;
  formulaName: string;
  formula: string;

  constructor(
    project: Project,
    formulaName: string,
    formula: string) {
      this.project = project;
      this.formulaName = formulaName;
      this.formula = formula;
    }
}
