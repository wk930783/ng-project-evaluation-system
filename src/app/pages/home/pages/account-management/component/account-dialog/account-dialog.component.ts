
import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as _ from 'lodash';
import { AccountService, GetAllRoleParams, Role } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';

export interface DialogData {
  id?: string;
  name: string;
  account: string;
  roleCode: string;
}

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent implements OnInit{
  allRole: Role[] = [];
  constructor(
    private accountService: AccountService,
    private userService: UserService,
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}
  ngOnInit(): void {
    this.getAllRole();
  }
  getAllRole(){
    const params: GetAllRoleParams = {
      roleCode: this.userService.userInfo.roleCode,
      token: this.userService.userInfo.token
    }
    const subscription = this.accountService.getAllRole(params).subscribe({
      next: (data)=>{
        this.allRole = _.cloneDeep(data);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
