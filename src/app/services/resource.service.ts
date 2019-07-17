import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { AuthService } from './auth.service';

@Injectable()
export class ResourceService {

  private serverUrl = 'http://localhost:8080/project1';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getAllProjects() {
    return this.http.get<Project[]>(this.serverUrl + '/project/projects');
  }
}
