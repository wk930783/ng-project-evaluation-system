import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
type Menu = {
  link: string;
  name: string;
  code: string;
};
@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {
  menuList: Menu[] = [];
  nowMenuCode = '';
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(){
    this.nowMenuCode = this.menuService.nowMenuCode;
    this.menuList = this.menuService.getMenu();
  }

  changeNowMenuCode(menuCode: string){
    this.nowMenuCode = menuCode;
  }
}
