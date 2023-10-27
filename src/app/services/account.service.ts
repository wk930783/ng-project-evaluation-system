import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import * as _ from 'lodash';
import { Observable, from } from 'rxjs';
export type Account ={
  id?: string;
  name: string;
  account: string;
  roleCode: string;
  roleName: string;
};
export type GetAllAccountParams = {
  roleCode: string;
  token: string;
}
export type GetAllRoleParams = {
  roleCode: string;
  token: string;
}
export type CreateAccountParams = {
  name: string;
  account: string;
  roleCode: string;
}
export type EditAccountParams = {
  id: string;
  name: string;
  account: string;
  roleCode: string;
}
export type Role = {
  name: string;
  code: string;
}
// 應包含 所有帳號管理
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  mockAllAccount: Account[] = [
    {
      name: '張小美',
      account: 'chang',
      roleCode: 'teacher',
      roleName: '教師',
      id: ' user000001'
    },
    {
      name: '陳小明',
      account: 'chen',
      roleCode: 'management',
      roleName: '管理者',
      id: ' user000002'
    },
    {
      name: '黃小麗',
      account: 'huang',
      roleCode: 'student',
      roleName: '學生',
      id: ' user000003'
    }
  ]
  mockAllRole: Role[] = [
    {
      name: '教師',
      code: 'teacher'
    },
    {
      name: '學生',
      code: 'student'
    },
    {
      name: '管理者',
      code: 'management'
    },
  ]
  constructor(
    private baseApiService: BaseApiService
  ) { }

  getAllAccount(params: GetAllAccountParams): Observable<Account[]> {
    return from(new Promise<Account[]>((resolve,reject)=>{
      resolve(_.cloneDeep(this.mockAllAccount));
    }));
    return this.baseApiService.post<Account[]>('/allAccount', params);
  }

  getAllRole(params: GetAllRoleParams): Observable<Role[]> {
    return from(new Promise<Role[]>((resolve,reject)=>{
      resolve(_.cloneDeep(this.mockAllRole));
    }));
    return this.baseApiService.post<Role[]>('/allAccount', params);
  }

  createAccount(params: CreateAccountParams): Observable<boolean> {
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    return this.baseApiService.post<boolean>('/allAccount', params);
  }

    editAccount(params: EditAccountParams): Observable<boolean> {
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    return this.baseApiService.post<boolean>('/allAccount', params);
  }

  deleteAccount(id: string): Observable<boolean> {
    return from(new Promise<boolean>((resolve,reject)=>{
      resolve(true);
    }));
    return this.baseApiService.delete<boolean>(`/deleteAccount`,{id: id});
  }
}
