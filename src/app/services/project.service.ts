import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseApiService } from './base-api.service';
/** 獲取組員清單 傳參 */
type GetTeamParams = {
  name: string
}
/** 新增組 傳參 */
type CreateTeamParams = {
  name: string;
  number: string;
  members: TeamMember[];
}
/** 更新分組 傳參 */
export type UpdateTeamParams = {
  id: string
  name: string;
  number: string;
  members: TeamMember[];
}
export type Team = {
  id: string;
  name: string;
  number: string;
  members: TeamMember[];
}
/** 組員資料 */
type TeamMember = {
  id?: string;
  name: string;
  account: string;
}
export type GetFileListParams = {
  id: string;
}

export type ProjectFile = {
  name: string;
  type: 'pdf';
  id: string;
  path: string;
}

export type TeamEvaluation ={
  name: string;
  number: string;
  file: File | null;
  score: number | null;
}

// 應包含 專題分組 專題檔案上傳 專題評分
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  mockTeam:Team = {
    id: 't-1',
    name: '測試用組別1',
    number: '組別流水號A',
    members: [
      {
        id: '',
        name: '王姓組員',
        account: '123123'
      }
    ]
  };
  mockFile: ProjectFile[] = [
    {
      name: '專題簡報',
      type: 'pdf',
      id: 'pf001',
      path: 'localhost/bucket/'
    }
  ]
  mockTeamEvaluation: TeamEvaluation[] = []
  constructor(private baseApiService: BaseApiService) {
    this.mockTeamEvaluation = [{
      name: this.mockTeam.name,
      number: this.mockTeam.number,
      file: null,
      score: 0
    }]
  }
  /** 新增分組 */
  createTeam(params: CreateTeamParams): Observable<boolean>{
    return this.baseApiService.post('project/createTeam', params);
  }
  /** 新增組員 */
  createMember(id: string, member: TeamMember): Observable<boolean>{
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    // return this.baseApiService.post('project/createTeam', {member: member, id: id});
  }
  /** 編輯組員 */
  editMember(id: string, member: TeamMember): Observable<boolean>{
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    // return this.baseApiService.put('project/createTeam', {member: member, id: id});
  }
  /** 刪除組員 */
  deleteMember(memberId: string): Observable<boolean>{
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    // return this.baseApiService.delete('project/createTeam', {member: member, id: id});
  }
  /** 獲取組別資料 */
  getTeam(params: GetTeamParams): Observable<Team> {
    return from(new Promise<Team>((resolve,reject)=>{
      resolve(this.mockTeam);
    }));
    // return this.baseApiService.post<Team>('/project/getTeam', params);
  }
  /** 更新組別資料 */
  updateTeam(params: UpdateTeamParams): Observable<boolean>{
    return from(new Promise<boolean>((resolve,reject)=>{
      this.mockTeam = JSON.parse(JSON.stringify(params));
      resolve(true);
    }));
    // return this.baseApiService.put('project/createTeam', params);
  }

  /** 獲取 專題檔案清單  */
  getFileList(params: GetFileListParams): Observable<ProjectFile[]> {
    return from(new Promise<ProjectFile[]>((resolve,reject)=>{
      this.mockTeam = JSON.parse(JSON.stringify(params));
      resolve(this.mockFile);
    }));
    // return this.baseApiService.get(`project/createTeam?id=${params.id}`);
  }
}
