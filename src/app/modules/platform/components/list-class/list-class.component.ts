import { Component, OnInit, signal } from '@angular/core';
import { UserClassService } from '@platform-service/user-class.service';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { UserClassModel } from '@platform-model/user-class.model';
import { Dialog } from '@angular/cdk/dialog';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatsnackbarSuccessComponent } from '@shared-component/matsnackbar-success/matsnackbar-success.component';
import { MatSnackBarSuccessConfig } from 'src/app/utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCourseModel } from '@platform-model/user-course.model';
import { UserCourseService } from '@platform-service/user-course.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit{

  listUserClassModel = signal<UserClassModel[]>([]);
  objectUserCourseModel = signal<UserCourseModel | null>(null)
  idCourse = signal<number>(0);
  idClass = signal<number>(0);
  openSidebar = false;

  constructor(
    private userClassService: UserClassService,
    private userCourseService: UserCourseService,
    private globalStatusService: GlobalStatusService,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.globalStatusService.setLoading(true)
    this.activatedRoute.params.subscribe(params => {
      this.idCourse.set(params['idCourse'] || 1);
      this.idClass.set(params['idClass'] || 1);
    });
    this.userCourseService.getFindByCourse(this.idCourse()).subscribe({
      next: data =>{
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data
          })
        }
        this.objectUserCourseModel.set(data.object);
        this.globalStatusService.setLoading(false)
      },
      error: err => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error
        })
        this.globalStatusService.setLoading(false)
      },
    })
    this.userClassService.getFindByCourse(this.idCourse()).subscribe({
      next: data =>{
        console.log(data)
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data
          })
        }
        if(data.status === 1){
          this.matSnackBar.openFromComponent(MatsnackbarSuccessComponent, MatSnackBarSuccessConfig);
          this.listUserClassModel.set(data.list);
        }
        this.globalStatusService.setLoading(false)
      },
      error: err => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error
        })
        this.globalStatusService.setLoading(false)
      },
    })
  }

  onClickClass(idClass: number){
    this.idClass.set(idClass);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { idClass },
      queryParamsHandling: 'merge',
    });
  }

}
