import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/navigation/home/home.component';
import { LoginComponent } from './components/page/login/login.component';
import { EvaluationComponent } from './components/page/evaluation/evaluation.component';
import { RegistrationEvaluationComponent } from './components/page/registration-evaluation/registration-evaluation.component';
import { ClassRegistrationComponent } from './components/page/class-registration/class-registration.component';
import { ClassSchedulesComponent } from './components/page/class-schedules/class-schedules.component';
import { UserComponent } from './components/page/user/user.component';
import { UserRegistrationComponent } from './components/page/user-registration/user-registration.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'evalution', component: EvaluationComponent},
    { path: 'registration-evaluation', component: RegistrationEvaluationComponent },
    { path: 'class-schedules', component: ClassSchedulesComponent },
    { path: 'class-registration', component: ClassRegistrationComponent },
    { path: 'user', component: UserComponent },
    { path: 'user-registration', component: UserRegistrationComponent},
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
