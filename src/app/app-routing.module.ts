import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'platform',
    pathMatch: 'full'
  },
  {
    path: 'platform',
    loadChildren: () => import('./modules/platform/platform.module').then(m => m.PlatformModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
