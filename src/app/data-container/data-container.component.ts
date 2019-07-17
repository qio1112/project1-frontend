import { Component, OnInit, Input } from '@angular/core';
import { ProjectData } from '../models/project-data';
import { Project } from '../models/project.model';
import { Resource } from '../models/resource.model';
import { Data } from '../models/data.model';

@Component({
  selector: 'app-data-container',
  templateUrl: './data-container.component.html',
  styleUrls: ['./data-container.component.css']
})
export class DataContainerComponent implements OnInit {
  @Input() private numberPerPage: number;
  @Input() private pageNumber: number;
  @Input() private mode: string;
  @Input() private name: string;

  private projectData: ProjectData;

  private columnNames: string[];

  private dataTable: string[][];

  constructor() { }

  ngOnInit() {
    const dummyProject = new Project(1, 'project 1');
    const dummyResources: Resource[] = [];
    dummyResources.push(new Resource(dummyProject, '000001', 'resource one'));
    dummyResources.push(new Resource(dummyProject, '000002', 'resource two'));
    dummyResources.push(new Resource(dummyProject, '000003', 'resource three'));
    const dummyData: Data[] = [];
    dummyData.push(new Data(dummyProject, '000001', 'age', '21', 'number'));
    dummyData.push(new Data(dummyProject, '000002', 'age', '32', 'number'));
    dummyData.push(new Data(dummyProject, '000003', 'age', '43', 'number'));
    dummyData.push(new Data(dummyProject, '000001', 'email', 'e1', 'text'));
    dummyData.push(new Data(dummyProject, '000002', 'email', 'e2', 'text'));
    dummyData.push(new Data(dummyProject, '000003', 'email', 'e3', 'text'));
    this.projectData = new ProjectData(dummyProject, dummyData, dummyResources);

    this.columnNames = this.getColumnNames();
    this.dataTable = this.getDataTable();

    console.log(this.dataTable);
  }

  private getColumnNames(): string[] {
    const nameSet = new Set();
    for (const data of this.projectData.dataArray) {
      nameSet.add(data.columnName);
    }
    return [...nameSet.keys()];
  }

  private getDataTable(): string[][] {
    const dataTable = [];
    const resourceCodes = []
    for (const resource of this.projectData.resources) {
      dataTable.push([resource.resourceName, resource.resourceCode]);
      resourceCodes.push(resource.resourceCode);
    }
    for (const data of this.projectData.dataArray) {
      const rowIndex = resourceCodes.findIndex(code => code === data.resourceCode);
      // first two columns are always resource name and resource code
      const columnIndex = this.columnNames.findIndex(name => name === data.columnName) + 2;
      dataTable[rowIndex][columnIndex] = data.value;
    }
    return dataTable;
  }
}
