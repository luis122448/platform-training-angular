import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { PlatformCourseComponent } from '@platform-layout/platform-course/platform-course.component';
import { PlatformExamPreviewComponent } from '@platform-layout/platform-exam-preview/platform-exam-preview.component';
import { PlatformExamResultComponent } from '@platform-layout/platform-exam-result/platform-exam-result.component';
import { PlatformExamComponent } from '@platform-layout/platform-exam/platform-exam.component';
import { PlatformQuestResultComponent } from '@platform-layout/platform-quest-result/platform-quest-result.component';
import { PlatformVideoComponent } from '@platform-layout/platform-video/platform-video.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course/1',
    pathMatch: 'full'
  },
  {
    path: 'course/:idCourse',
    canActivate: [ AuthGuard ],
    component : PlatformCourseComponent
  },
  {
    path: 'video/:idClass',
    canActivate: [ AuthGuard ],
    component : PlatformVideoComponent
  },
  {
    path: 'exam-preview/:idCourse',
    canActivate: [ AuthGuard ],
    component : PlatformExamPreviewComponent
  },
  {
    path: 'exam/:idExam',
    canActivate: [ AuthGuard ],
    component: PlatformExamComponent
  },
  {
    path: 'quest-result/:idQuest',
    canActivate: [ AuthGuard ],
    component: PlatformQuestResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
