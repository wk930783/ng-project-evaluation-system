import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
type Menu = {
  link: string;
  name: string;
  code: string;
};
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  allMenu: Menu[] = [
    {
      link: '/project-teaming',
      name: '專題分組',
      code: 'p001'
    },
    {
      link: '/project-file-management',
      name: '專題文件管理',
      code: 'p002'
    },
    {
      link: '/project-evaluation',
      name: '專題線上評分',
      code: 'p003'
    },
    {
      link: 'user-info',
      name: '帳號設定',
      code: 'u001'
    },
    {
      link: 'account-management',
      name: '帳號管理',
      code: 'a001'
    }
  ];
  nowMenuCode = '';
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ){}

  getMenu(): Menu[] {
    const menuList: Menu[] = [];
    for(const menu of this.allMenu){
      if(this.userService.userInfo.moduleCode.includes(menu.code)){
        menuList.push(JSON.parse(JSON.stringify(menu)));
      }
    }
    return menuList;
  }

}
