import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppMaterialModules } from './material.module';
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
import { InlineEditComponent } from './inline-edit/inline-edit.component';

import { SatPopoverModule } from '@ncstate/sat-popover';


import { routing } from './app.routing';
import { ExcelService } from './trainee/excel.Service';

import { DataService } from './data.service';
import { RegisterService } from './announceTraining/register.service';
import { ViewService } from './viewTraining/view.service';
import { ApprovalService } from './traineeApproval/approval.service';

@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule, ReactiveFormsModule,FormsModule,AppMaterialModules,
    SatPopoverModule, routing,HttpClientModule ,CdkTableModule,HttpModule,BsDatepickerModule.forRoot(),NgbModule.forRoot()],
  providers: [ DataService, RegisterService, ViewService, ApprovalService,ExcelService],
  declarations: [ AppComponent, HelloComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent,ViewTrainingComponent, LoginComponent, HomeComponent,  RegisterComponent,TraineeApprovalComponent,DashboardComponent,TraineeComponent,InlineEditComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
