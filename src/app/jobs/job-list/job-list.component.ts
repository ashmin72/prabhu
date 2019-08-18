import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  JobsService
} from 'src/app/shared/jobs.service';
import {
  MatTableDataSource,
  MatSort,
  MatPaginator
} from '@angular/material';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';
import {
  JobsComponent
} from '../jobs.component';
import {
  NotificationService
} from 'src/app/shared/notification.service';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  constructor(private service: JobsService,
              private dialog: MatDialog,
              private notificationService: NotificationService) {}
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  listData: MatTableDataSource < any > ;
  displayedColumns: string[] = ['companyName', 'category', 'title', 'jobType', 'actions'];
  ngOnInit() {
    this.service.getJobs().subscribe(
      list => {
        const array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    );
  }
  onSearchKey() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(JobsComponent, dialogConfig);
  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(JobsComponent, dialogConfig);
  }
  onDelete($key) {
    if (confirm('Are you sure?')) {
      this.service.deleteJob($key);
      this.notificationService.warn('Deleted successfully');
    }
  }
}
