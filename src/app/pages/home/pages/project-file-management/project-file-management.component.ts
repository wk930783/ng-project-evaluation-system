import { ProjectFile, ProjectService } from 'src/app/services/project.service';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-project-file-management',
  templateUrl: './project-file-management.component.html',
  styleUrls: ['./project-file-management.component.css']
})
export class ProjectFileManagementComponent {
  /** 專題檔案列表 */
  fileList: ProjectFile[] =[];
  uploadFile?:File;
  constructor(
    private projectService: ProjectService,
    private userService: UserService
  ){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getFileList();
  }
  /** 獲取專題檔案清單 */
  getFileList(){
    const subsciption = this.projectService.getFileList({id: this.userService.userInfo.teamId }).subscribe({
      next: (fileList) => {
        this.fileList = _.cloneDeep(fileList);
      },
      complete: () => {
        subsciption.unsubscribe();
      }
    })
  }
  /** 下載檔案 */
  downloadFile(file: ProjectFile){
    // this.projectService.uploadFile()
  }
  /** ngFor trackby */
  trackByFn(index: number, data: ProjectFile) {
    return data.id ?? index;
  }
}
