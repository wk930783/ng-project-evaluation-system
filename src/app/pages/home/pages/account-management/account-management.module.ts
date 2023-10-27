import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AccountManagementComponent } from './account-management.component';
import { FormsModule } from '@angular/forms';
import { CommonTableModule } from 'src/app/component/common-table/common-table.module';
import { AccountDialogComponent } from './component/account-dialog/account-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AccountManagementComponent,
    AccountDialogComponent
  ],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    CommonTableModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class AccountManagementModule { }
