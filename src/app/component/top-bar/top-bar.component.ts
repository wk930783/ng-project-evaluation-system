import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  @Input() title = '專題評分管理系統';
  storeName = '';
  colorForTitle = 'white';
}
