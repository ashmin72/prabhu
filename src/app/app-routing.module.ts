import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  WelcomeComponent
} from './welcome/welcome.component';
import {
  SignupComponent
} from './auth/signup/signup.component';
import {
  LoginComponent
} from './auth/login/login.component';
// import { JobsComponent } from './jobs/jobs.component';
import {
  JobListComponent
} from './jobs/job-list/job-list.component';

import {
  AuthGuard
} from './auth/auth.guard';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // {path: 'jobs', component: JobsComponent, canActivate: [AuthGuard]},
  {
    path: 'job',
    component: JobListComponent
  }
];

@NgModule({
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
