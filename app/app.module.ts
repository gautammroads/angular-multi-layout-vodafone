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
import { TraineeComponent } from './trainee/trainee.component';
import { HttpClientModule } from  '@angular/common/http';

import { RegisterComponent } from './announceTraining/register.component';
import { TraineeApprovalComponent } from './traineeApproval/trainee-approval.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ViewTrainingComponent } from './viewTraining/view-training.component';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { routing } from './app.routing';

import { DataService } from './data.service';
import { RegisterService } from './announceTraining/register.service';
import { ViewService } from './viewTraining/view.service';
import { ApprovalService } from './traineeApproval/approval.service';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,FormsModule, routing,HttpClientModule ,CdkTableModule,HttpModule,BsDatepickerModule.forRoot(),NgbModule.forRoot()],
  providers: [ DataService, RegisterService, ViewService, ApprovalService],
  declarations: [ AppComponent, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent,ViewTrainingComponent, LoginComponent, HomeComponent,  RegisterComponent,TraineeApprovalComponent,DashboardComponent,TraineeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
