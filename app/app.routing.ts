import { Routes, RouterModule } from '@angular/router';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          
         { path: 'about', component: AboutComponent },
          { path: 'test/:id', component: AboutComponent }
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
         
          { path: 'profile', component: ProfileComponent },
        ]
    },
    

    //no layout routes
    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


