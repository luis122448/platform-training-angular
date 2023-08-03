import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformVideoComponent } from './layout/platform-video/platform-video.component';

const routes: Routes = [
  {
    path: '',
    component : PlatformVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
