import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontIconComponent } from './components/font-icon/font-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ButtonStandardComponent } from './components/button-standard/button-standard.component';
import { InputSearchStandardComponent } from './components/input-search-standard/input-search-standard.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { AlertStandardComponent } from './components/alert-standard/alert-standard.component';
import { DialogErrorAlertComponent } from './components/dialog-error-alert/dialog-error-alert.component';
import { MatsnackbarSuccessComponent } from './components/matsnackbar-success/matsnackbar-success.component';
import { DialogDeleteQuestionComponent } from './components/dialog-delete-question/dialog-delete-question.component';
import { ButtonQuestionComponent } from './components/button-question/button-question.component';
import { MatsnackbarMessageComponent } from './components/matsnackbar-message/matsnackbar-message.component';
import { ButtonOperacComponent } from './components/button-operac/button-operac.component';
import { DialogQuestionComponent } from './components/dialog-question/dialog-question.component';
import { CdkModule } from './cdk/cdk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LazyLoadImageComponent } from './components/lazy-load-image/lazy-load-image.component';
import { RatingCountComponent } from './components/rating-count/rating-count.component';

@NgModule({
  declarations: [
    FontIconComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ButtonStandardComponent,
    InputSearchStandardComponent,
    ThemeSwitcherComponent,
    AlertStandardComponent,
    DialogErrorAlertComponent,
    MatsnackbarSuccessComponent,
    DialogDeleteQuestionComponent,
    ButtonQuestionComponent,
    MatsnackbarMessageComponent,
    ButtonOperacComponent,
    DialogQuestionComponent,
    LazyLoadImageComponent,
    RatingCountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
    CdkModule,
    RouterLink
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    CdkModule,
    FontIconComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    ButtonStandardComponent,
    InputSearchStandardComponent,
    ThemeSwitcherComponent,
    AlertStandardComponent,
    DialogErrorAlertComponent,
    MatsnackbarSuccessComponent,
    DialogDeleteQuestionComponent,
    ButtonQuestionComponent,
    MatsnackbarMessageComponent,
    ButtonOperacComponent,
    DialogQuestionComponent,
    LazyLoadImageComponent
  ]
})
export class SharedModule { }
