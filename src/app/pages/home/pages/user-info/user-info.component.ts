import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { UpdateUserInfoParams, User, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userInfo!: User
  constructor(
    private userService: UserService
  ){

  }
  ngOnInit(){
    this.userInfo = _.cloneDeep(this.userService.userInfo);
  }

  updateUserInfo() {
    const params: UpdateUserInfoParams = {
      userName: this.userInfo.userName,
      account: this.userInfo.account,
      remark: this.userInfo.remark
    }
    const subscription=this.userService.updateUserInfo(params).subscribe({
      next:(success)=>{
        if(success){
          sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
        }
      },
      complete:()=>{
        subscription.unsubscribe()
      }
    });
  }
}
