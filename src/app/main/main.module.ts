import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main.component';
import { mainRouting } from './main-routing.module';
import { HomeComponent } from '../home/home.component';
import { SidebarMenuComponent }   from './sidebar-menu.component';
import { TreeviewMenuComponent }   from './treeview-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    mainRouting,
    NgbModule,
  ],
  declarations: [
    MainComponent,
    HomeComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent,
  ]
})
export class MainModule { }
