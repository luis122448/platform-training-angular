import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from '../../models/comment-class.model';
import { CommentService } from '@platform-service/comment.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { Dialog } from '@angular/cdk/dialog';
import { MyDate } from 'src/app/utils/date';

@Component({
  selector: 'app-item-comment-class',
  templateUrl: './item-comment-class.component.html',
  styleUrls: ['./item-comment-class.component.scss'],
})
export class ItemCommentClassComponent implements OnInit{
  @Input() commentClass: CommentModel | undefined;
  @Input() idClass: number = 0;
  @Input() isOpenSidebar: boolean = false;

  isOpenDetail: boolean = false;
  isOpenReply: boolean = false;

  constructor(
    private commentService: CommentService,
    private dialog: Dialog
  ) {
    if (this.commentClass) {
      console.log(this.commentClass.registerDate);
      this.commentClass.specialDate = MyDate.converToCustomDateSpecial(this.commentClass.registerDate);
      console.log(this.commentClass.specialDate);
    }
  }
  ngOnInit(): void {

    if (this.commentClass) {
      console.log(this.commentClass.registerDate);
      this.commentClass.specialDate = MyDate.converToCustomDateSpecial(this.commentClass.registerDate);
      console.log(this.commentClass.specialDate);
    }
  }

  openReply() {
    this.isOpenReply = true;
  }

  registerComment($event: CommentModel | undefined) {
    if ($event && $event.idCommentRef == this.commentClass?.idComment) {
      this.commentClass?.commentModelList.push($event);
    }
    this.isOpenReply = false;
  }

  likeComment(idComment: number | undefined) {
    if (idComment && this.commentClass) {
      if (this.commentClass.idComment == idComment) {
        this.commentClass.likeComment++;
        this.commentService.putUpdate(idComment, 1, 0).subscribe({
          next: (data) =>{
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
      } else {
        this.commentClass.commentModelList.forEach((comment) => {
          if (comment.idComment == idComment) {
            comment.likeComment++;
            this.commentService.putUpdate(idComment, 1, 0).subscribe(
              (data) =>{
                if (data.status <= 0) {
                  this.dialog.open(DialogErrorAlertComponent, {
                    width: '400px',
                    data: data,
                  });
                }
              },
              (err) => {
                this.dialog.open(DialogErrorAlertComponent, {
                  width: '400px',
                  data: err.error,
                });
              }
            );
          }
        });
      }
    }
  }
}
