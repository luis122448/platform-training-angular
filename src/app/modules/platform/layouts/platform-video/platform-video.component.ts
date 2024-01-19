import { Dialog } from '@angular/cdk/dialog';
import { Component, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserClassModel } from '@platform-model/user-class.model';
import { UserCourseModel } from '@platform-model/user-course.model';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { UserClassService } from '@platform-service/user-class.service';
import { UserCourseService } from '@platform-service/user-course.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { MatsnackbarSuccessComponent } from '@shared-component/matsnackbar-success/matsnackbar-success.component';
import { MatSnackBarSuccessConfig } from 'src/app/utils/constants';

@Component({
  selector: 'app-platform-video',
  templateUrl: './platform-video.component.html',
  styleUrls: ['./platform-video.component.scss']
})
export class PlatformVideoComponent {

  listUserClassModel = signal<UserClassModel[]>([]);
  objectUserCourseModel = signal<UserCourseModel | null>(null)
  idCourse = signal<number>(0);
  idClass = signal<number>(0);
  openSidebar = false;

  constructor(
    private userCourseService: UserCourseService,
    private userClassService: UserClassService,
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
            data: {status: data.status, message: data.message}
          })
        }
        if(data.status === 1){
          this.matSnackBar.openFromComponent(MatsnackbarSuccessComponent, MatSnackBarSuccessConfig);
          this.objectUserCourseModel.set(data.object);
        }
        this.globalStatusService.setLoading(false)
      },
      error: (error) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: {status: -3, message: error.mensaje}
        })
        this.globalStatusService.setLoading(false)
      },
    })
    this.globalStatusService.setLoading(true)
    this.userClassService.getFindByCourse(this.idCourse()).subscribe({
      next: data =>{
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: {status: data.status, message: data.message}
          })
        }
        if(data.status === 1){
          this.matSnackBar.openFromComponent(MatsnackbarSuccessComponent, MatSnackBarSuccessConfig);
          this.listUserClassModel.set(data.list);
        }
        this.globalStatusService.setLoading(false)
      },
      error: (error) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: {status: -3, message: error.mensaje}
        })
        this.globalStatusService.setLoading(false)
      },
    })
  }

}
