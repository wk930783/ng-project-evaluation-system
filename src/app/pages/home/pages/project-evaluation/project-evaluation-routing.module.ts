import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectEvaluationComponent } from './project-evaluation.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectEvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectEvaluationRoutingModule { }
