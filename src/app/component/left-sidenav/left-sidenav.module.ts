import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftSidenavRoutingModule } from './left-sidenav-routing.module';
import { LeftSidenavComponent } from './left-sidenav.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LeftSidenavComponent
  ],
  imports: [
    CommonModule,
    LeftSidenavRoutingModule,
    HttpClientModule
  ],
  exports: [
    LeftSidenavComponent
  ]
})
export class LeftSidenavModule { }
