import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginFormComponent } from '@auth-component/login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
