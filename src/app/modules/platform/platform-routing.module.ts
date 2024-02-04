import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guard/auth.guard';
import { PlatformVideoComponent } from '@platform-layout/platform-video/platform-video.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'preview',
    pathMatch: 'full'
  },
  {
    path: 'preview',
    canActivate: [ AuthGuard ],
    component : PlatformVideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
