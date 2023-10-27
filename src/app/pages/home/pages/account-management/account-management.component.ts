import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { OperateItem, TableColumnDef } from 'src/app/component/common-table/common-table.model';
import { Account, AccountService, EditAccountParams, GetAllAccountParams } from 'src/app/services/account.service';
import { UserService } from 'src/app/services/user.service';
import { AccountDialogComponent } from './component/account-dialog/account-dialog.component';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit{
  accountList: Account[] = [];
  tableColumnDefs: TableColumnDef<Account>[] = [];
  /** 列表操作 */
  operateItems: OperateItem<Account>[] = [];
  queryParams = {
    user: ''
  }
  constructor(
    private accountService: AccountService,
    private userService: UserService,
    public dialog: MatDialog,
  ){}
  ngOnInit(): void {
    this.setTableColumnDefs();
    this.getAllAccount();
  }
  setTableColumnDefs(){
    this.tableColumnDefs = [
      {
        dataKey: 'name',
        headerNames: '姓名',
        widthOfTable: '120px',
      },
      {
        dataKey: 'account',
        headerNames: '帳號',
        widthOfTable: '120px',
      },
      {
        dataKey: 'roleName',
        headerNames: '姓名',
        widthOfTable: '120px',
      }
    ];
    this.operateItems = [
      {
        name: '編輯',
        handleOperate: (account: Account)=>{
          this.editAccountDlg(account);
        }
      },
      {
        name: '刪除',
        handleOperate: (account: Account)=>{
          if(account.id){
            this.deleteAccount(account.id);
          }
        }
      }
    ]
  }
  /** 獲取所有帳號資料 */
  getAllAccount(){
    const params: GetAllAccountParams = {
      roleCode: this.userService.userInfo.roleCode,
      token: this.userService.userInfo.token
    }
    this.accountService.getAllAccount(params).subscribe({
      next: (data) => {
        this.accountList = _.cloneDeep(data);
      }
    });
  }
  createAccount(account: Account){
    const subscripiton = this.accountService.createAccount(account).subscribe({
      next:(success) =>{
        if(success){
          this.getAllAccount();
        }
      },
      complete: ()=>{
        subscripiton.unsubscribe();
      }
    });
  }
  editAccount(account: Account){
    const params: EditAccountParams = {
      id: account.id ?? '',
      name: account.name,
      account: account.account,
      roleCode: account.roleCode,
    }
    const subscripiton = this.accountService.editAccount(params).subscribe({
      next:(success) =>{
        if(success){
          this.getAllAccount();
        }
      },
      complete: ()=>{
        subscripiton.unsubscribe();
      }
    });
  }
  deleteAccount(id:string){
    const subscripiton = this.accountService.deleteAccount(id).subscribe({
      next:(success) =>{
        if(success){
          this.getAllAccount();
        }
      },
      complete: ()=>{
        subscripiton.unsubscribe();
      }
    });
  }
  /** 開窗 */
  openAccountDlg(account: Account, type: 'create' | 'edit'): MatDialogRef<AccountDialogComponent, any> {
    return this.dialog.open(AccountDialogComponent, {
      data: account
    });
  }
  /** 新增帳號開窗 */
  createMemberDlg() {
    const account: Account = {
      name: '',
      account: '',
      roleCode: '',
      roleName: ''
    };
    const dlg = this.openAccountDlg(account,'create');
    const subscription = dlg.afterClosed().subscribe({
      next: (account: Account) => {
        if(account){
          this.createAccount(account);
        }
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }
  /** 編輯帳號開窗 */
  editAccountDlg(account: Account){
    const dlg = this.openAccountDlg(account,'edit');
    const subscription = dlg.afterClosed().subscribe({
      next: (account: Account) => {
        if(account){
          this.editAccount(account);
        }
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }
  /** 進階查詢 */
  advancedSearch(){
    this.getAllAccount();
  }

  submitFromForm(){
    this.getAllAccount();
  }
}
