import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titleForBar = '專題評分管理系統';
  bgColorClassForWrap = 'bg-deep-purple';

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const url = this.menuService.getMenu()[0].link;
    this.router.navigate([url]);
  }
}
