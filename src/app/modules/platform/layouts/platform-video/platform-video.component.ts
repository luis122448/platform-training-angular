import { Dialog } from '@angular/cdk/dialog';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';
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
  styleUrls: ['./platform-video.component.scss'],
})
export class PlatformVideoComponent implements OnInit, OnChanges {
  listUserClassModel = signal<UserClassModel[]>([]);
  objectUserCourseModel = signal<UserCourseModel | undefined>(undefined);
  idCourse = signal<number>(0);
  userCourseModel = signal<UserCourseModel | undefined>(undefined);
  idClass = signal<number>(0);
  userClassModel = signal<UserClassModel | undefined>(undefined);
  countClass = signal<number>(0);
  openSidebar = false;

  constructor(
    private userCourseService: UserCourseService,
    private userClassService: UserClassService,
    private globalStatusService: GlobalStatusService,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.globalStatusService.setLoading(true);
    this.activatedRoute.params.subscribe((params) => {
      this.idCourse.set(params['idCourse'] || 1);
      this.idClass.set(params['idClass'] || 1);
    });
    this.userCourseService.getFindByCourse(this.idCourse()).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
        this.objectUserCourseModel.set(data.object);
        this.userCourseModel.set(this.objectUserCourseModel());
        this.globalStatusService.setLoading(false);
      },
      error: (error) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: { status: -3, message: error.mensaje },
        });
        this.globalStatusService.setLoading(false);
      },
    });
    this.globalStatusService.setLoading(true);
    this.userClassService.getFindByCourse(this.idCourse()).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
        this.listUserClassModel.set(data.list);
        this.userClassModel.set(
          this.listUserClassModel().find((x) => x.idClass === this.idClass())
        );
        this.countClass.set(this.listUserClassModel().length);
        this.globalStatusService.setLoading(false);
      },
      error: (error) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: { status: -3, message: error.mensaje },
        });
        this.globalStatusService.setLoading(false);
      },
    });
  }

  changeClass($event: number) {
    console.log($event);
    let index = this.listUserClassModel().findIndex(
      (x) => x.idClass === this.idClass()
    );
    index += $event;
    if (this.listUserClassModel()[index].typeClass === 'TAG') {
      index++;
    }
    if (index >= 0 && index < this.listUserClassModel().length) {
      console.log(this.listUserClassModel()[index]);
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { idClass: this.listUserClassModel()[index].idClass },
        queryParamsHandling: 'merge',
      });
      this.idClass.set(this.listUserClassModel()[index].idClass);
      this.userClassModel.set(this.listUserClassModel()[index]);
    }
  }

  changeSpecificClass($event: number) {
    let index = this.listUserClassModel().findIndex(
      (x) => x.idClass === $event
    );
    console.log(this.listUserClassModel()[index]);
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { idClass: this.listUserClassModel()[index].idClass },
      queryParamsHandling: 'merge',
    });
    this.idClass.set(this.listUserClassModel()[index].idClass);
    this.userClassModel.set(this.listUserClassModel()[index]);
  }
}
