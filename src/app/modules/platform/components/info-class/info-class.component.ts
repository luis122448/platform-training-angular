import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserClassModel } from '@platform-model/user-class.model';
import { UserCourseModel } from '@platform-model/user-course.model';

@Component({
  selector: 'app-info-class',
  templateUrl: './info-class.component.html',
  styleUrls: ['./info-class.component.scss'],
})
export class InfoClassComponent {
  @Input() userClassModel: UserClassModel | undefined = undefined;
  @Input() userCourseModel: UserCourseModel | undefined = undefined;
  @Input() countClass: number = 0;
  @Output() changeClass = new EventEmitter<number>();

  constructor() {}

  previewClass() {
    this.changeClass.emit(-1);
  }

  nextClass() {
    this.changeClass.emit(1);
  }
}
