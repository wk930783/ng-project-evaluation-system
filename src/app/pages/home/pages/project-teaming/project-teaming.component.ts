import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import {
  OperateItem,
  TableColumnDef,
} from 'src/app/component/common-table/common-table.model';
import {
  ProjectService,
  Team,
  UpdateTeamParams,
} from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';
import { MemberDialogComponent } from './component/member-dialog/member-dialog.component';
/** 組員資料 */
type TeamMember = {
  id?: string;
  name: string;
  account: string;
};
@Component({
  selector: 'app-project-teaming',
  templateUrl: './project-teaming.component.html',
  styleUrls: ['./project-teaming.component.css'],
})
export class ProjectTeamingComponent implements OnInit {
  /** 表單 */
  formGroupForTeam!: FormGroup<{
    name: FormControl<string | null>;
    number: FormControl<string | null>;
  }>;
  /** team表單 */
  nameControl!: FormControl;
  /** team表單 */
  numberControl!: FormControl;
  /** 列表定義 */
  tableColumnDefs: TableColumnDef<TeamMember>[] = [];
  /** 列表操作 */
  operateItems: OperateItem<TeamMember>[] = [];
  /** 組別資料 */
  team!: Team;
  members: TeamMember[] = [];
  constructor(
    private projectService: ProjectService,
    private userService: UserService,
    public dialog: MatDialog,
  ) {}
  ngOnInit(): void {
    this.formGroupForTeam = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
    });
    this.nameControl = this.formGroupForTeam.controls.name;
    this.numberControl = this.formGroupForTeam.controls.number;
    this.setTableColumnDefs();
    this.getTeam();
  }
  /** 獲取組別資料 */
  getTeam(): void {
    this.projectService
      .getTeam({ name: this.userService.userInfo.userName })
      .subscribe({
        next: (data) => {
          this.team = _.cloneDeep(data);
          this.members = _.cloneDeep(data.members);
          this.nameControl.patchValue(this.team.name);
          this.numberControl.patchValue(this.team.number);
        },
      });
  }
  /** 更新組別資料 */
  updateTeam(): void {
    console.log('update');
    const params: UpdateTeamParams = {
      id: this.team.id,
      name: this.team.name,
      number: this.team.number,
      members: this.team.members,
    };
    this.projectService.updateTeam(params).subscribe({
      next: (data) => {
        if (data) {
          this.getTeam();
        }
      },
    });
  }
  /** 新增會員 */
  createMember(id: string,member: TeamMember): void {
    this.projectService.createMember(id,member).subscribe({
      next: (success) => {
        if(success) {
          this.getTeam();
        }
      }
    });
  }
  /** 編輯會員 */
  editMember(id: string,member: TeamMember): void {
    this.projectService.editMember(id,member).subscribe({
      next: (success) => {
        if(success) {
          this.getTeam();
        }
      }
    });
  }
  /** 設定列表定義 */
  setTableColumnDefs() {
    this.tableColumnDefs = [
      {
        dataKey: 'name',
        headerNames: '姓名',
        widthOfTable: '100px',
      },
      {
        dataKey: 'account',
        headerNames: '帳號',
        widthOfTable: '120px',
      },
    ];
    this.operateItems = [
      {
        name: '編輯',
        handleOperate: (member: TeamMember) => {
          this.editMemberDlg(member);
        },
      },
      {
        name: '刪除',
        handleOperate: (member: TeamMember) => {
          this.deleteMember(member);
        },
      },
    ];
  }
  /** 表單提交事件 */
  submitFromForm() {
    this.team.name = this.nameControl.getRawValue();
    this.team.number = this.numberControl.getRawValue();
    this.updateTeam();
  }
  /** 開窗 */
  openMemberDlg(member: TeamMember): MatDialogRef<MemberDialogComponent, any> {
    return this.dialog.open(MemberDialogComponent, {
      data: member,
    });
  }
  /** 新增組員資料 */
  createMemberDlg() {
    const member: TeamMember = {
      name: '',
      account: '',
    };
    const dlg = this.openMemberDlg(member);
    const subscription = dlg.afterClosed().subscribe({
      next: (member: TeamMember) => {
        this.createMember(this.team.id,member);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }
  /** 編輯組員資料 */
  editMemberDlg(member: TeamMember) {
    const dlg = this.openMemberDlg(member);
    const subscription = dlg.afterClosed().subscribe({
      next: (member: TeamMember) => {
        this.editMember(this.team.id,member);
      },
      complete: () => {
        subscription.unsubscribe();
      }
    });
  }
  /** 刪除組員資料 */
  deleteMember(member: TeamMember): void {
    if(!member.id){
      return;
    }
    const subscription =this.projectService.deleteMember(member.id).subscribe({
      next: (success)=>{
        if(success){
          this.getTeam();
        }
      },
      complete: () => {
        subscription.unsubscribe();
      }
    })
  }
  /** ngFor trackby */
  trackByFn(index: number, data: TeamMember) {
    return data.id ?? index;
  }
}
