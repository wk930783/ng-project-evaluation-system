import { BaseApiService } from './base-api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
/** 使用者基本資料
 * @param userName: 使用者名稱
 * @param roleCode: 角色碼
 * @param roleName: 角色名稱
 * @param moduleCode: 模組碼
 */
export type User = {
  userName: string;
  roleCode : string;
  roleName: string;
  moduleCode: string[];
  token: string;
  teamId: string;
  account: string;
  remark: string;
}

export type UpdateUserInfoParams = {
  userName: string;
  account: string;
  remark: string;
}

// 應包含 使用者設定 登入 登出 判斷是否有登入
@Injectable({
  providedIn: 'root'
})
export class UserService {
  /** 使用者資料 */
  userInfo: User ={
    userName: '',
    roleCode: '',
    roleName: '',
    moduleCode: [],
    token: '',
    teamId: '',
    account: '',
    remark: ''
  };
  /** 假資料 */
  mockUser: User = {
    userName: '王姓學員',
    roleCode: 'student',
    roleName: '學生',
    moduleCode: ['p001', 'p002', 'p003', 'u001', 'a001'],
    token: 'asadqwdlpmqpk1p23j',
    teamId: '123',
    account: 'woung',
    remark: ''
  }
  /** 假資料 */
  mockApiResponse!: {
    code: number;
    data: User | null
  }

  constructor(
    private router: Router,
    private baseApiService: BaseApiService
  ){
    this.mockApiResponse = {
      code: 200,
      data: this.mockUser
    }
  }
  /** 確認是否登入 */
  checkLogin(): boolean{
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo !== null){
      this.userInfo = JSON.parse(userInfo);
    }
    return userInfo !== null;
  }
  /** 登入 */
  login(account: string, pwd: string) {
    // return this.httpClient.post('/login',{}).pipe();
    from(new Promise<any>((resolve,reject)=>{
      resolve(this.mockApiResponse);
    })).subscribe({
      next: (deta)=>{
        this.userInfo = JSON.parse(JSON.stringify(this.mockUser));
        localStorage.setItem('userInfo',JSON.stringify(this.userInfo));
        this.router.navigate([('/')]);
      }
    })
  }
  logout(): void {
    localStorage.removeItem('userInfo');
    this.router.navigate([('/login')]);
  }

  updateUserInfo(params: UpdateUserInfoParams):Observable<boolean>{
    return from(new Promise<boolean>((resolve,reject)=>{
      this.userInfo.account = params.account;
      this.userInfo.userName = params.userName;
      this.userInfo.remark = params.remark;
      sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      resolve(true)
    }))
    // return this.baseApiService.post<boolean>('/updateUserInfo', params)
  }
}
