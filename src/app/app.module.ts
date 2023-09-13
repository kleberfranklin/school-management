import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { RegistrationEvaluationComponent } from './components/registration-evaluation/registration-evaluation.component';
import { PanelComponent } from './components/panel/panel.component';
import { ClassSchedulesComponent } from './components/class-schedules/class-schedules.component';
import { ClassRegistrationComponent } from './components/class-registration/class-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EvaluationComponent,
    RegistrationEvaluationComponent,
    PanelComponent,
    ClassSchedulesComponent,
    ClassRegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
