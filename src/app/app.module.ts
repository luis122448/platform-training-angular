import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformVideoComponent } from './modules/platform/layout/platform-video/platform-video.component';
import { ListClassComponent } from './modules/platform/components/list-class/list-class.component';
import { InfoClassComponent } from './modules/platform/components/info-class/info-class.component';
import { ResourcesClassComponent } from './modules/platform/components/resources-class/resources-class.component';
import { CommentClassComponent } from './modules/platform/components/comment-class/comment-class.component';
import { VideoClassComponent } from './modules/platform/components/video-class/video-class.component';

@NgModule({
  declarations: [
    AppComponent,
    PlatformVideoComponent,
    ListClassComponent,
    InfoClassComponent,
    ResourcesClassComponent,
    CommentClassComponent,
    VideoClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
