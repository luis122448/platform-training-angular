import { Component, OnInit, signal } from '@angular/core';
import { CommentClassModel } from '@platform-model/comment-class.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dialog } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClassCommentService } from '@platform-service/class-comment.service';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-comment-class',
  templateUrl: './comment-class.component.html',
  styleUrls: ['./comment-class.component.scss']
})
export class CommentClassComponent implements OnInit{

  listCommentClassModel = signal<CommentClassModel[]>([]);
  idClass = signal<number>(0);
  openSidebar: boolean = false;
  openWriteComment: boolean = false;
  openSubComment: boolean = false;
  myCommentForm!: FormGroup

  private buildForm() {
    this.myCommentForm = this.formBuilder.group({
      type: [0,[Validators.required]],
      markdownContent: ['', [Validators.required]],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialog: Dialog,
    private matSnackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private globalStatusService: GlobalStatusService,
    private classCommentService: ClassCommentService,
    ) {
    this.buildForm();
  }
  ngOnInit(): void {
    this.globalStatusService.setLoading(true)
    this.activatedRoute.params.subscribe(params => {
      this.idClass.set(params['idClass'] || 2);
    });
    this.classCommentService.getFindByClass(this.idClass()).subscribe({
      next: data =>{
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data
          })
        }
        this.listCommentClassModel.set(data.list);
        this.globalStatusService.setLoading(false)
      },
      error: err => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error
        })
        this.globalStatusService.setLoading(false)
      }
    })

  }

  onClickComment() {
    this.openWriteComment = !this.openWriteComment
  }

  onSendComment() {

  }

}
