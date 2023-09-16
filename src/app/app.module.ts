import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { LoginComponent } from './components/page/login/login.component';
import { HomeComponent } from './components/navigation/home/home.component';
import { FormsModule } from '@angular/forms';
import { EvaluationComponent } from './components/page/evaluation/evaluation.component';
import { RegistrationEvaluationComponent } from './components/page/registration-evaluation/registration-evaluation.component';
import { PanelComponent } from './components/page/panel/panel.component';
import { ClassSchedulesComponent } from './components/page/class-schedules/class-schedules.component';
import { ClassRegistrationComponent } from './components/page/class-registration/class-registration.component';
import { UserComponent } from './components/page/user/user.component';
import { UserRegistrationComponent } from './components/page/user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AbbreviatedDatePipe } from './pipes/abbreviated-date.pipe';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

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
    UserComponent,
    UserRegistrationComponent,
    AbbreviatedDatePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
