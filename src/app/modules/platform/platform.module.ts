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
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BoxCommentComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    PlatformRoutingModule,
    SharedModule,
    YouTubePlayerModule,
    // BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ]
})
export class PlatformModule { }
