import { Component, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCourseModel } from '@platform-model/user-course.model';

@Component({
  selector: 'app-info-course',
  templateUrl: './info-course.component.html',
  styleUrls: ['./info-course.component.scss']
})
export class InfoCourseComponent{
  @Input() userCourseModel: UserCourseModel | undefined = undefined;
  idCourse = signal<number>(0);
  idClass = signal<number>(0);

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.idCourse.set(this.userCourseModel?.idCourse || 0);
    this.idClass.set(this.userCourseModel?.userClassModelList[0].idClass || 0);
  }

  onStartCourse() {
    // Pasar por parametro el id de clase ( por defecto 1)
    // Navegar a la ruta /platform/video/:idCourse/:idClass
    this.router.navigate(['/platform/video', this.idClass()]);
  }

  onTakeExam() {
    this.router.navigate(['/platform/exam-preview', this.idCourse()]);
  }

}
