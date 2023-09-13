import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { RegistrationEvaluationComponent } from './components/registration-evaluation/registration-evaluation.component';
import { ClassRegistrationComponent } from './components/class-registration/class-registration.component';
import { ClassSchedulesComponent } from './components/class-schedules/class-schedules.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'evalution', component: EvaluationComponent},
    { path: 'registration-evaluation', component: RegistrationEvaluationComponent },
    { path: 'class-schedules', component: ClassSchedulesComponent },
    { path: 'class-registration', component: ClassRegistrationComponent },
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
