import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Project } from '../models/project.model';
import { AuthService } from './auth.service';

@Injectable()
export class ProjectService {

  private serverUrl = 'http://localhost:8080/project1';

  private project = new Project(1, 'ProjectOne');

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAllProjects() {
    return this.http.get<any>(this.serverUrl + '/project/projects');
  }

  getDataByRange(page: number, pageRows: number) {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('page_rows', pageRows.toString());
    return this.http.get<any>(this.serverUrl + '/project/' + this.project.projectName, {params});
  }
}
