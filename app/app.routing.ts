import { Routes, RouterModule } from '@angular/router';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';

import { TraineeComponent } from './trainee/trainee.component';
import { HomeComponent } from './home/home.component';
import { ViewTrainingComponent } from './viewTraining/view-training.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { TraineeApprovalComponent } from './traineeApproval/trainee-approval.component';
import { RegisterComponent } from './announceTraining/register.component';


const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          
         { path: 'about', component: ViewTrainingComponent },
          { path: 'test/:id', component: ViewTrainingComponent }
        ]
    },

     { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent},
         
        ]
    },
   

     { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
         
          { path: 'register', component: RegisterComponent },
        ]
    },
    
         { 
        path: '', 
        component: SiteLayoutComponent,
        children: [ 
          { path: 'view', component: TraineeComponent },
          ]
    },
   
     { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
         
          { path: 'profile', component: TraineeApprovalComponent},
        ]
    },

    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
         
          { path: 'dashboard', component: DashboardComponent },
        ]
    },
    
    

    //no layout routes
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


