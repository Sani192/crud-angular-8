import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ProjectsService } from '../../projects.service';
import { ClientLocationsService } from '../../client-locations.service';

import { Project } from 'src/app/Project';
import { ClientLocation } from 'src/app/client-location';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  clientLocations: ClientLocation[];
  showLoading: boolean = true;

  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number;
  deleteProject: Project = new Project();
  deleteIndex: number;
  searchText: string;

  constructor(private projectsService : ProjectsService, private datePipe : DatePipe,
    private clientLocationsService : ClientLocationsService) {
  }

  ngOnInit() {
    this.projectsService.getAllProjects().subscribe(
      (resp : Project[]) => {
        this.projects = resp;
        this.showLoading = false;
      }
    );
    this.clientLocationsService.getClientLocations().subscribe(
      (resp : ClientLocation[]) => {
        this.clientLocations = resp;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onSaveClick() {
    this.newProject.clientLocation.clientLocationId = 0;
    this.projectsService.insertProject(this.newProject).subscribe(
      (resp) => {
        // Add project to grid
        var p = new Project();
        p.projectId = resp.projectId;
        p.projectName = resp.projectName;
        p.dateOfStart = resp.dateOfStart;
        p.teamSize = resp.teamSize;
        p.clientLocation = resp.clientLocation;
        p.active = resp.active;
        p.clientLocationId = resp.clientLocationId
        p.status = resp.status;
        this.projects.push(p);

        // clear new project dialog
        this.newProject.projectId = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
        this.newProject.active = false;
        this.newProject.clientLocationId = null;
        this.newProject.status = null;
      },
      (err) => {
        console.error(err);
      });
  }

  onEditClick(event, index: number) {
    this.editIndex = index;
    this.editProject.projectId = this.projects[index].projectId;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    // this.datePipe.transform(this.projects[index].dateOfStart,"dd/mm/yyyy");
    this.editProject.teamSize = this.projects[index].teamSize;
    this.editProject.active = this.projects[index].active;
    this.editProject.clientLocationId = this.projects[index].clientLocationId;
    this.editProject.status = this.projects[index].status;
    this.editProject.clientLocation = this.projects[index].clientLocation;
  }

  onUpdateClick() {
    this.projectsService.updateProject(this.editProject).subscribe(
      (resp) => {
        // update project to grid
        var p = new Project();
        p.projectId = resp.projectId;
        p.projectName = resp.projectName;
        p.dateOfStart = resp.dateOfStart;
        p.teamSize = resp.teamSize;
        p.clientLocation = resp.clientLocation;
        p.active = resp.active;
        p.clientLocationId = resp.clientLocationId
        p.status = resp.status;
        this.projects[this.editIndex] = p;

        // clear new project dialog
        this.editProject.projectId = null;
        this.editProject.projectName = null;
        this.editProject.dateOfStart = null;
        this.editProject.teamSize = null;
        this.editProject.active = false;
        this.editProject.clientLocationId = null;
        this.editProject.status = null;
      },
      (err) => {
        console.error(err);
      });
  }

  onDeleteClick(event, index: number) {
    this.deleteIndex = index;
    this.deleteProject.projectId = this.projects[index].projectId;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }

  onDeleteConfirmClick() {
    this.projectsService.deleteProject(this.deleteProject.projectId).subscribe(
      (resp) => {
        this.projects.splice(this.deleteIndex, 1);

        // clear new project dialog
        this.deleteProject.projectId = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  onSearchClick() {
    this.projectsService.searchProjects(this.searchText).subscribe(
      (resp: Project[]) => {
        this.projects = resp;
      },
      (err) => {
        console.error(err);
      });
  }
}
