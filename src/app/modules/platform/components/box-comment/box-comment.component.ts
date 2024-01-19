import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-comment',
  templateUrl: './box-comment.component.html',
  styleUrls: ['./box-comment.component.scss']
})
export class BoxCommentComponent {

  @Input() openSidebar: boolean = false;

  myCommentForm!: FormGroup

  private buildForm() {
    this.myCommentForm = this.formBuilder.group({
      type: [0,[Validators.required]],
      markdownContent: ['', [Validators.required]],
    });
  }

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.buildForm();
  }

  onClickComment(){

  }

  onSendComment(){

  }

}
