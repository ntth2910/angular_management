import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ReportTemplateListComponent } from './components/report-template-list/report-template-list.component';
// import { ReportTemplateCreateComponent } from './components/report-template-create/report-template-create.component';
// import { ReportTemplateEditComponent } from './components/report-template-edit/report-template-edit.component';
// import { ProjectListComponent } from './components/project-list/project-list.component';
// import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
// import { ProjectCreateComponent } from './components/project-create/project-create.component';
// import { ProjectEditComponent } from './components/project-edit/project-edit.component';
// import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import {LoginComponent} from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    // ReportTemplateListComponent,
    // ReportTemplateCreateComponent,
    // ReportTemplateEditComponent,
    // ProjectListComponent,
    // ProjectDetailComponent,
    // ProjectCreateComponent,
    // ProjectEditComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ShowHidePasswordModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
