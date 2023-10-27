import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTeamingComponent } from './project-teaming.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectTeamingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectTeamingRoutingModule { }
