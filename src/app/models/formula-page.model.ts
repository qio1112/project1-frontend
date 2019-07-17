import { Project } from './project.model';
import { FormulaPageData } from './formula-page-data.model';
import { Formula } from './formula.model';

/**
 * data mapping class for all data on formula page
 */

export class FormulaPage {
  project: Project;
  formulaPageData: FormulaPageData;
  formulas: Formula;

  constructor (
    project: Project,
    formulaPageData: FormulaPageData,
    formulas: Formula
  ) {
    this.project = project;
    this.formulaPageData = formulaPageData;
    this.formulas = formulas;
  }
}
