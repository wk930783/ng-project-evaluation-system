import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFileManagementComponent } from './project-file-management.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectFileManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectFileManagementRoutingModule { }
