import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModuleModel } from '@platform-model/user-module.model';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-info-module',
  templateUrl: './info-module.component.html',
  styleUrls: ['./info-module.component.scss']
})
export class InfoModuleComponent {

  @Input() userModuleModel: UserModuleModel | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  onStartModule() {
    const idCourse = this.userModuleModel?.userCourseModelList[0].idCourse;
    this.router.navigate([`/platform/module/${idCourse}`]);
  }

}
