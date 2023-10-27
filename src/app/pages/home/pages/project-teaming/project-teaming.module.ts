import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTeamingRoutingModule } from './project-teaming-routing.module';
import { ProjectTeamingComponent } from './project-teaming.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from 'src/app/component/common-table/common-table.module';
import { MatButtonModule } from '@angular/material/button';
import { MemberDialogComponent } from './component/member-dialog/member-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ProjectTeamingComponent, MemberDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProjectTeamingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
})
export class ProjectTeamingModule {}
