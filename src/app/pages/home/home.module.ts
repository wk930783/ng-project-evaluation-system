import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopBarModule } from 'src/app/component/top-bar/top-bar.module';
import { FooterModule } from 'src/app/component/footer/footer.module';
import { UserInfoModule } from 'src/app/component/user-info/user-info.module';
import { LeftSidenavModule } from 'src/app/component/left-sidenav/left-sidenav.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule,
    TopBarModule,
    FooterModule,
    LeftSidenavModule,
    UserInfoModule
  ]
})
export class HomeModule { }
