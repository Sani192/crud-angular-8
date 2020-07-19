import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProjectsComponent } from './projects/projects.component';

import { DashboardService } from '../dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  providers: [
    DashboardService,
    DatePipe
  ]
})
export class AdminModule { }
