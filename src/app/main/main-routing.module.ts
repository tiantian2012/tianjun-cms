import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import { AuthService } from '../service/_auth-service/auth.service';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
      {
            path: 'home',
            component: HomeComponent,
            canActivate:[AuthService]
      }
];

export const mainRouting = RouterModule.forChild(mainRoutes);
