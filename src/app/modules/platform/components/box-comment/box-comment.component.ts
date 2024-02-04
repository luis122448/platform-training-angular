import { Dialog } from '@angular/cdk/dialog';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BasicUserModel } from '@auth-model/auth.model';
import { DefaultValuesService } from '@auth-service/default-values.service';
import { CommentModel } from '@platform-model/comment-class.model';
import { CommentService } from '@platform-service/comment.service';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { MatsnackbarSuccessComponent } from '@shared-component/matsnackbar-success/matsnackbar-success.component';
import { MatSnackBarSuccessConfig, NoDataFoundMessageDialog } from 'src/app/utils/constants';

@Component({
  selector: 'app-box-comment',
  templateUrl: './box-comment.component.html',
  styleUrls: ['./box-comment.component.scss'],
})
export class BoxCommentComponent{
  @Input() isOpenSidebar: boolean = false;
  @Input() idClass: number = 0;
  @Input() idCommentRef: number = 0;
  @Output() registerComment = new EventEmitter<CommentModel | undefined>();

  myCommentForm!: FormGroup;
  basicUser: BasicUserModel | undefined;
  isShowHelp: boolean = true;

  private buildForm() {
    const type = this.idCommentRef != 0 ? 'RESPONSE' : 'QUEST';
    this.myCommentForm = this.formBuilder.group({
      idCommentRef: [this.idCommentRef],
      typeComment: [type, [Validators.required]],
      markdownContent: ['', [Validators.required]],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private globalStatusService: GlobalStatusService,
    private defaultValuesServices: DefaultValuesService,
    private commentService: CommentService,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar
  ) {
    this.buildForm();
    this.basicUser = this.defaultValuesServices.getCookieValue('user')[0];
  }

  onClickComment() {
    this.isShowHelp = false;
  }

  onSendComment() {
    if (this.myCommentForm.invalid) {
      return;
    }
    const commentRegister: CommentModel = {
      idCommentRef: this.idCommentRef || 0,
      idComment: 0,
      idClass: this.idClass,
      typeComment: this.typeComment?.value,
      registerUser: 0,
      username: this.basicUser?.username || '',
      urlPhoto: this.basicUser?.urlPhoto || '',
      registerDate: new Date(),
      likeComment: 0,
      dislikeComment: 0,
      markdownContent: this.markdownContent?.value,
      commentModelList: [],
    };
    this.globalStatusService.setLoading(true);
    this.commentService.postSave(this.idCommentRef, commentRegister).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        } else {
          this.matSnackBar.openFromComponent(
            MatsnackbarSuccessComponent,
            MatSnackBarSuccessConfig
          );
          this.markdownContent?.setValue('');
          this.isShowHelp = true;
          this.registerComment.emit(commentRegister);
        }
        this.globalStatusService.setLoading(false);
      },
      error: (err) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error,
        });
        this.globalStatusService.setLoading(false);
      },
    });
  }

  onLikeComment(){
    this.commentService.putUpdate(this.idCommentRef, 1, 0).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
      },
      error: (err) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error,
        });
      },
    });
  }

  onDislikeComment(){
    this.commentService.putUpdate(this.idCommentRef, 0, 1).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
      },
      error: (err) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error,
        });
      },
    });
  }

  get markdownContent() {
    return this.myCommentForm.get('markdownContent');
  }

  get typeComment() {
    return this.myCommentForm.get('typeComment');
  }

}
