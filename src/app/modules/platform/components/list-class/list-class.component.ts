import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
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

  @Output() changeSpecificClass = new EventEmitter<number>();
  @Input() listUserClassModel: UserClassModel[] = [];
  @Input() userCourseModel: UserCourseModel | undefined = undefined;
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
  }

  onClickClass(idClass: number){
    this.idClass.set(idClass);
    this.changeSpecificClass.emit(idClass);
  }

}
