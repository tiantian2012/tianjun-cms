import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }      from './login/login.component';
import { MainComponent }   from './main/main.component';

import { AuthService } from './service/_auth-service/auth.service';

/**
 * app路由
 */
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { 
     path: 'login',component: LoginComponent,//  canActivate:true
  },
  { 
     path: 'main',  
     component: MainComponent,
     loadChildren: 'app/main/main.module#MainModule',
     canActivate:[AuthService] 
  }
];

export const appRouting=RouterModule.forRoot(routes);
