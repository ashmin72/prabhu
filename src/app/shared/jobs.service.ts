import {
  Injectable
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  AngularFireDatabase,
  AngularFireList
} from '@angular/fire/database';
import {
  DatePipe
} from '@angular/common';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private firebase: AngularFireDatabase,
              private datePipe: DatePipe) {}
  jobsList: AngularFireList < any > ;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    companyName: new FormControl('', Validators.required),
    category: new FormControl(''),
    vacancy: new FormControl(''),
    jobType: new FormControl(''),
    location: new FormControl(''),
    salary: new FormControl(''),
    education: new FormControl(''),
    experience: new FormControl(''),
    gender: new FormControl(''),
    viewed: new FormControl(''),
    daysLeft: new FormControl(''),
    skills: new FormControl(''),
    industry: new FormControl(''),
    title: new FormControl(''),
    postedOn: new FormControl(''),
    deadline: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      companyName: '',
      category: '',
      vacancy: '',
      jobType: '',
      location: '',
      salary: '',
      education: '',
      experience: '',
      gender: '',
      viewed: '',
      daysLeft: '',
      skills: '',
      industry: '',
      title: '',
      postedOn: '',
      deadline: '',
    });
  }
  getJobs() {
    this.jobsList = this.firebase.list('jobs');
    return this.jobsList.snapshotChanges();
  }
  insertJob(jobs) {
    this.jobsList.push({
      companyName: jobs.companyName,
      category: jobs.category,
      vacancy: jobs.vacancy,
      jobType: jobs.jobType,
      location: jobs.location,
      salary: jobs.salary,
      education: jobs.education,
      experience: jobs.experience,
      gender: jobs.gender,
      viewed: jobs.viewed,
      daysLeft: jobs.daysLeft,
      skills: jobs.skills,
      industry: jobs.industry,
      title: jobs.title,
      // tslint:disable-next-line: triple-equals
      postedOn: jobs.postedOn == '' ? '' : this.datePipe.transform(jobs.postedOn, 'yyyy-MM-dd'),
      // tslint:disable-next-line: triple-equals
      deadline: jobs.deadline == '' ? '' : this.datePipe.transform(jobs.deadline, 'yyyy-MM-dd'),
    });
  }
  updateJob(jobs) {
    this.jobsList.update(jobs.$key, {
      companyName: jobs.companyName,
      category: jobs.category,
      vacancy: jobs.vacancy,
      jobType: jobs.jobType,
      location: jobs.location,
      salary: jobs.salary,
      education: jobs.education,
      experience: jobs.experience,
      gender: jobs.gender,
      viewed: jobs.viewed,
      daysLeft: jobs.daysLeft,
      skills: jobs.skills,
      industry: jobs.industry,
      title: jobs.title,
      // tslint:disable-next-line: triple-equals
      postedOn: jobs.postedOn == '' ? '' : this.datePipe.transform(jobs.postedOn, 'yyyy-MM-dd'),
      // tslint:disable-next-line: triple-equals
      deadline: jobs.deadline == '' ? '' : this.datePipe.transform(jobs.deadline, 'yyyy-MM-dd'),
    });
  }
  deleteJob($key: string) {
    this.jobsList.remove($key);
  }
  populateForm(jobs) {
    this.form.setValue(_.omit(jobs));
  }
}
