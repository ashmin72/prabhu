import {
  Component,
  OnInit
} from '@angular/core';
import {
  JobsService
} from '../shared/jobs.service';
import {
  NotificationService
} from '../shared/notification.service';
import {
  MatDialogRef
} from '@angular/material';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(private service: JobsService,
              private notificationService: NotificationService,
              public dialogRef: MatDialogRef < JobsComponent > ) {}

  ngOnInit() {
    this.service.getJobs();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value) {
        this.service.insertJob(this.service.form.value);
      } else {
        this.service.updateJob(this.service.form.value);
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Successfully Submitted!');
    }
    this.onClose();
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
