import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { ItemListClassComponent } from './components/item-list-class/item-list-class.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { InfoClassComponent } from './components/info-class/info-class.component';
import { ResourcesClassComponent } from './components/resources-class/resources-class.component';
import { CommentClassComponent } from './components/comment-class/comment-class.component';
import { VideoClassComponent } from './components/video-class/video-class.component';
import { PlatformVideoComponent } from '@platform-layout/platform-video/platform-video.component';
import { SharedModule } from '../shared/shared.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ItemCommentClassComponent } from './components/item-comment-class/item-comment-class.component';
import { MarkdownModule } from 'ngx-markdown';
import { BoxCommentComponent } from './components/box-comment/box-comment.component';
import { PlatformCourseComponent } from './layouts/platform-course/platform-course.component';
import { InfoCourseComponent } from './components/info-course/info-course.component';
import { ListClassPreviewComponent } from './components/list-class-preview/list-class-preview.component';
import { PlatformExamComponent } from './layouts/platform-exam/platform-exam.component';
import { PlatformExamPreviewComponent } from './layouts/platform-exam-preview/platform-exam-preview.component';
import { PlatformExamResultComponent } from './layouts/platform-exam-result/platform-exam-result.component';
import { PlatformQuestResultComponent } from './layouts/platform-quest-result/platform-quest-result.component';
import { PreviewExamComponent } from './components/preview-exam/preview-exam.component';
import { PlatformModuleComponent } from './layouts/platform-module/platform-module.component';
import { InfoModuleComponent } from './components/info-module/info-module.component';
import { PlatformHomeComponent } from './layouts/platform-home/platform-home.component';

@NgModule({
  declarations: [
    PlatformVideoComponent,
    ListClassComponent,
    InfoClassComponent,
    ResourcesClassComponent,
    CommentClassComponent,
    VideoClassComponent,
    ItemListClassComponent,
    ItemCommentClassComponent,
    BoxCommentComponent,
    PlatformCourseComponent,
    InfoCourseComponent,
    ListClassPreviewComponent,
    PlatformExamComponent,
    PlatformExamPreviewComponent,
    PlatformExamResultComponent,
    PlatformQuestResultComponent,
    PreviewExamComponent,
    PlatformModuleComponent,
    InfoModuleComponent,
    PlatformHomeComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule,
    YouTubePlayerModule,
    MarkdownModule.forRoot()
  ]
})
export class PlatformModule { }
