import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly API_URL:string = '//localhost:8080/api/projects';

  constructor(private httpClient : HttpClient) {
  }

  getAllProjects() : Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.API_URL, { responseType: "json" });
  }

  insertProject(newProject: Project) : Observable<Project> {
    return this.httpClient.post<Project>(this.API_URL, newProject, { responseType: "json" });
  }

  updateProject(existingProject: Project) : Observable<Project> {
    return this.httpClient.put<Project>(this.API_URL, existingProject, { responseType: "json" });
  }

  deleteProject(projectId: number) : Observable<string> {
    return this.httpClient.delete<string>(this.API_URL + "?projectId=" + projectId);
  }

  searchProjects(searchText: string) : Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.API_URL + "?search=" + searchText, { responseType: "json" });
  }
}
