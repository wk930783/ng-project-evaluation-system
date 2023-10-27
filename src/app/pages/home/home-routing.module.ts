import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { accountManagementCanActivateGuard, projectEvaluationCanActivateGuard, projectFileManagementCanActivateGuard, projectTeamingCanActivateGuard, userInfoCanActivateGuard } from 'src/app/guards/auth.guard';
import { loginGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'user-info',
        loadChildren: (): Promise<any> => import('./pages/user-info/user-info.module').then(
          (m)=>{return m.UserInfoModule;}),
        canActivate: [userInfoCanActivateGuard, loginGuard]
      },
      {
        path: 'account-management',
        loadChildren: (): Promise<any> => import('./pages/account-management/account-management.module').then(
          (m)=>{return m.AccountManagementModule;}),
        canActivate: [accountManagementCanActivateGuard, loginGuard]
      },
      {
        path: 'project-evaluation',
        loadChildren: (): Promise<any> => import('./pages/project-evaluation/project-evaluation.module').then(
          (m)=>{return m.ProjectEvaluationModule;}),
        canActivate: [projectEvaluationCanActivateGuard, loginGuard]
      },
      {
        path: 'project-file-management',
        loadChildren: (): Promise<any> => import('./pages/project-file-management/project-file-management.module').then(
          (m)=>{return m.ProjectFileManagementModule;}),
        canActivate: [projectFileManagementCanActivateGuard, loginGuard]
      },
      {
        path: 'project-teaming',
        loadChildren: (): Promise<any> => import('./pages/project-teaming/project-teaming.module').then(
          (m)=>{return m.ProjectTeamingModule;}),
        canActivate: [projectTeamingCanActivateGuard, loginGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
