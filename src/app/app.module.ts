import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DataContainerComponent } from './data-container/data-container.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { FormulaTemplateComponent } from './formula-template/formula-template.component';
import { FormulaFormComponent } from './formula-form/formula-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { InfoWindowComponent } from './navigation/header/info-window/info-window.component';
import { DataContainerBarComponent } from './data-container/data-container-bar/data-container-bar.component';
import { AuthService } from './services/auth.service';
import { ProjectService } from './services/project.service';
import { UserService } from './services/user.service';
import { FormulaService } from './services/formula.service';
import { TokenInterceptor } from './services/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    LoginComponent,
    SignupComponent,
    DataContainerComponent,
    ResourceFormComponent,
    ProjectFormComponent,
    FormulaTemplateComponent,
    FormulaFormComponent,
    InfoWindowComponent,
    DataContainerBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    AuthService,
    ProjectService,
    UserService,
    FormulaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
