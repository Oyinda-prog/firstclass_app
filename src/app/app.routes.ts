import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { DisplaycontactComponent } from './displaycontact/displaycontact.component';
import { ViewinstaceComponent } from './viewinstace/viewinstace.component';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { SigninComponent } from './signin/signin.component';
import { TestsignupComponent } from './testsignup/testsignup.component';
import { TextsigninComponent } from './textsignin/textsignin.component';
import { TestdashboardComponent } from './testdashboard/testdashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { testguardGuard } from './guards/testguard.guard';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { MychatsignupComponent } from './mychatsignup/mychatsignup.component';
import { MychatsigninComponent } from './mychatsignin/mychatsignin.component';
import { mychatguardGuard } from './guards/mychatguard.guard';
import { ViewallcontactsComponent } from './viewallcontacts/viewallcontacts.component';
import { EventchildComponent } from './eventchild/eventchild.component';
import { BehaviorparentComponent } from './behaviorparent/behaviorparent.component';

// export const routes: Routes = [

  
// ];

export const routing:Routes=[
    {path:'',component:LandingpageComponent},
    {path:'home',redirectTo:'',pathMatch:'full'},
    {path:"behavior_subject",component:BehaviorparentComponent},
   {path:'dashboard/:index',component:DashboardComponent},
   {path:'testsignup',component:TestsignupComponent},
   {path:'reactiveform',component:ReactiveFormsComponent},
   {path:'settings', component:SettingsComponent},
   {path:'mychat_dashboard',children:[
    {path:'',component:ViewallcontactsComponent}, 
    {path:'views',component:TestsignupComponent},
    {path:':index',component:EventparentComponent}
   
   ],canActivate:[mychatguardGuard]},
   {path:'mychat_signup',component:MychatsignupComponent},
   {path:'mychat_signin',component:MychatsigninComponent},
   {path:'testsignin',component:TextsigninComponent},
   {path:'dashboard',  children:[
    {path:'',component:TestdashboardComponent},
    // {path:'settings', component:SettingsComponent}
   ],canActivate:[testguardGuard]},
   {path:'form',component:TemplatedrivenformComponent},
   {path:"signup",component:SignupComponent},
   {path:"signin",component:SigninComponent},
//    {path:'dash', children:[
//     {path:'',component:TemplatedrivenformComponent},
//     {path:'yes',children:[
//         {path:'',component:LandingpageComponent},
//         {path:'no',children:[
//             {path:'',component:TemplatedrivenformComponent},
//             {path:'how',component:LandingpageComponent}
//         ]}
//     ]}

//    ]},
   {path:'**',component:ErrorpageComponent}
//     {path:'',component:LandingpageComponent},
//     {path:'view',component:ViewinstaceComponent},
//     {path:'parent',component:ParentComponent},
//     {path:'child',component:ChildComponent},
//     {path:'home',redirectTo:'',pathMatch:'full'},
//     {path:'dashboard', children:[
//         {path:'',component:DisplaycontactComponent},
//         {path:'signup',children:[
//             {path:'',component: SignupComponent},
//             {path:'signin',children:[
//                 {path:'',component:ViewinstaceComponent},
//                 {path:'login/:index',component:LandingpageComponent}
//             ]}
//         ]}
//     ]},
//     {path:'service/:id',component:SignupComponent},
//    {path:'**',component:ErrorpageComponent}

     
]