import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy{
  @Input() isLogin = false;
  @Input() hasChanged = false;
  menuVisible = false;
  private clickSubscription!: Subscription;

  constructor(
    private el: ElementRef,
    public userService: UserService
  ){}
  ngOnInit(): void {
    this.isLogin = this.userService.checkLogin();
  }
  /** 登出 */
  logout(): void {
    this.userService.logout();
  }
  /** 變更下拉選單顯示 */
  changeMenuVisible() {
    this.menuVisible = !this.menuVisible;
    const documentClick$ = fromEvent<MouseEvent>(document, 'click');

    // 使用订阅来处理全局点击事件
    this.clickSubscription = documentClick$.subscribe((event: MouseEvent) => {
      const clickedInsideComponent = this.el.nativeElement.contains(event.target);
      if (!clickedInsideComponent) {
        this.menuVisible = false;
        this.clickSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if(this.clickSubscription){
      this.clickSubscription.unsubscribe();
    }
  }
}
