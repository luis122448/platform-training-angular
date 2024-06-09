import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserClassModel } from '@platform-model/user-class.model';
import { UserCourseModel } from '@platform-model/user-course.model';
import { UserModuleModel } from '@platform-model/user-module.model';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { UserCourseService } from '@platform-service/user-course.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-platform-course',
  templateUrl: './platform-course.component.html',
  styleUrls: ['./platform-course.component.scss']
})
export class PlatformCourseComponent implements OnInit{

  userModuleModel = signal<UserModuleModel | undefined>(undefined);
  userCourseModel = signal<UserCourseModel | undefined>(undefined);
  listUserClassModel = signal<UserClassModel[]>([]);
  idModule = signal<number>(0);
  idCourse = signal<number>(0);
  constructor(
    private globalStatusService: GlobalStatusService,
    private userCourseService: UserCourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: Dialog,
  ) { }

  ngOnInit(): void {
    this.globalStatusService.setLoading(true);
    this.activatedRoute.params.subscribe((params) => {
      this.idModule.set(params['idModule'] || 1);
      this.idCourse.set(params['idCourse'] || 1);
    });
    this.userCourseService.getFindByCourse(this.idCourse()).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
        this.userCourseModel.set(data.object);
        this.listUserClassModel.set(data.object.userClassModelList);
      },
      error: (err) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error,
        });
        this.globalStatusService.setLoading(false);
      },
      complete: () => {
        this.globalStatusService.setLoading(false);
      }
    });
  }

}
