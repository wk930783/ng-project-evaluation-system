import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectFileManagementRoutingModule } from './project-file-management-routing.module';
import { ProjectFileManagementComponent } from './project-file-management.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectFileManagementComponent
  ],
  imports: [
    CommonModule,
    ProjectFileManagementRoutingModule,
    FormsModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class ProjectFileManagementModule { }
