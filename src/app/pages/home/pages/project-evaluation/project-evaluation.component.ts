import { TableColumnDef } from 'src/app/component/common-table/common-table.model';
import { Component, OnInit } from '@angular/core';
import { ProjectService, TeamEvaluation } from 'src/app/services/project.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-evaluation',
  templateUrl: './project-evaluation.component.html',
  styleUrls: ['./project-evaluation.component.css']
})
export class ProjectEvaluationComponent implements OnInit {
  teamList: TeamEvaluation[] = [];
  tableColumnDefs: TableColumnDef<TeamEvaluation>[] = [];
  constructor(
    private projectService: ProjectService
  ){

  }

  ngOnInit(): void {
    this.tableColumnDefs = [
      {
        dataKey: 'name',
        headerNames: '組別名稱',
        widthOfTable: '120px'
      },
      {
        dataKey: 'file',
        headerNames: '文件',
        widthOfTable: '160px',
        hiddenKey: true
      },
      {
        dataKey: 'score',
        headerNames: '成績',
        widthOfTable: '80px',
        inputType: 'number',
        needEdit: true
      }
    ];
    this.getTeamEvaluation();
  }
  /** 獲取 各組資料 */
  getTeamEvaluation(){
    this.teamList = _.cloneDeep(this.projectService.mockTeamEvaluation);
    // this.projectService.getTeamEvaluation()
  }
  saveTeamEvaluation(){
    // this.projectService.saveTeamEvaluation();
  }
}
