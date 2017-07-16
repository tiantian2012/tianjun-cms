import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { appRouting } from './app-routing.module';
import { HomeComponent } from './home/home.component';

//spin
import { SpinComponent } from './shared/spin/spin.component';
import { SpinService } from './shared/spin/spin.service';

//auth
import { AuthService } from './service/_auth-service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MainModule,
    appRouting,
    NgbModule.forRoot(),
  ],
  providers: [SpinService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
