import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar.component';
import { UserInfoModule } from '../user-info/user-info.module';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    UserInfoModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class TopBarModule { }
