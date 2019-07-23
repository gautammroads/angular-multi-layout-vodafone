import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';





import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
//import { TraineeComponent } from './trainee/trainee.component';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AboutComponent } from './about/about.component';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,FormsModule, routing ,CdkTableModule,HttpModule,BsDatepickerModule.forRoot(),NgbModule.forRoot()],
  providers: [],
  declarations: [ AppComponent, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent,AboutComponent, LoginComponent, HomeComponent,  RegisterComponent,ProfileComponent,DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
