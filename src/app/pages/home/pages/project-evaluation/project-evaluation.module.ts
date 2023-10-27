import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectEvaluationRoutingModule } from './project-evaluation-routing.module';
import { ProjectEvaluationComponent } from './project-evaluation.component';
import { CommonTableModule } from 'src/app/component/common-table/common-table.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectEvaluationComponent
  ],
  imports: [
    CommonModule,
    ProjectEvaluationRoutingModule,
    CommonTableModule,
    HttpClientModule
  ]
})
export class ProjectEvaluationModule { }
