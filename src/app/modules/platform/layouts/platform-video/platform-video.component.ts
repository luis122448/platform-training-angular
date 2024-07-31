import { Dialog } from '@angular/cdk/dialog';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserClassModel } from '@platform-model/user-class.model';
import { UserCourseModel } from '@platform-model/user-course.model';
import { UserClassService } from '@platform-service/user-class.service';
import { UserCourseService } from '@platform-service/user-course.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-platform-video',
  templateUrl: './platform-video.component.html',
  styleUrls: ['./platform-video.component.scss'],
})
export class PlatformVideoComponent implements OnInit, OnChanges {
  listUserClassModel = signal<UserClassModel[]>([]);
  objectUserCourseModel = signal<UserCourseModel | undefined>(undefined);
  idCourse = signal<number>(0);
  idClass = signal<number>(0);
  userCourseModel = signal<UserCourseModel | undefined>(undefined);
  userClassModel = signal<UserClassModel | undefined>(undefined);
  countClass = signal<number>(0);
  openSidebar = false;

  constructor(
    private userCourseService: UserCourseService,
    private userClassService: UserClassService,
    private dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idCourse.set(+params['idCourse'] || 1);
      this.idClass.set(+params['idClass'] || 1);
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
      }
    });
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
      }
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
      this.router.navigate(['/platform/class',this.listUserClassModel()[index].idClass], {
        relativeTo: this.activatedRoute,
        // queryParams: { idClass: this.listUserClassModel()[index].idClass },
        // queryParamsHandling: 'merge',
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
    this.router.navigate(['/platform/class',this.listUserClassModel()[index].idClass], {
      relativeTo: this.activatedRoute,
      // queryParams: { idClass: this.listUserClassModel()[index].idClass },
      // queryParamsHandling: 'merge',
    });
    this.idClass.set(this.listUserClassModel()[index].idClass);
    this.userClassModel.set(this.listUserClassModel()[index]);
  }
}
