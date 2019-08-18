import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  AppComponent
} from './app.component';
import {
  SignupComponent
} from './auth/signup/signup.component';
import {
  LoginComponent
} from './auth/login/login.component';
import {
  JobsComponent
} from './jobs/jobs.component';
import {
  AngularFireModule
} from '@angular/fire';
import {
  AngularFireDatabaseModule
} from '@angular/fire/database';
import {
  AngularFireAuthModule
} from '@angular/fire/auth';
import {
  environment
} from '../environments/environment';
import {
  AngularFirestoreModule
} from '@angular/fire/firestore';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  WelcomeComponent
} from './welcome/welcome.component';
import {
  MaterialModule
} from './material.module';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  QuillModule
} from 'ngx-quill';
import {
  HeaderComponent
} from './navigation/header/header.component';
import {
  SidenavListComponent
} from './navigation/sidenav-list/sidenav-list.component';
import {
  AuthService
} from './auth/auth.service';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  JobListComponent
} from './jobs/job-list/job-list.component';
import {
  JobsService
} from './shared/jobs.service';
import {
  DatePipe
} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    JobsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    JobListComponent,

  ],
  imports: [
    // tslint:disable-next-line: deprecation
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  providers: [AuthService, JobsService, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [JobsComponent]
})
export class AppModule {}
