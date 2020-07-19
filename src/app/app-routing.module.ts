import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "about-us", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo:"login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
