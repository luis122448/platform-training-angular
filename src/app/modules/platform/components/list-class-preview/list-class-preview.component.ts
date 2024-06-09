import { Component, Input } from '@angular/core';
import { UserClassModel } from '@platform-model/user-class.model';
import { UserCourseModel } from '@platform-model/user-course.model';

@Component({
  selector: 'app-list-class-preview',
  templateUrl: './list-class-preview.component.html',
  styleUrls: ['./list-class-preview.component.scss']
})
export class ListClassPreviewComponent {
  @Input() userCourseModel: UserCourseModel | undefined = undefined;
  @Input() listUserClassModel: UserClassModel[] = [];

  constructor() {

  }

}
