import { Component, Input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ExamModel } from '@platform-model/exam-model';

@Component({
  selector: 'app-preview-exam',
  templateUrl: './preview-exam.component.html',
  styleUrls: ['./preview-exam.component.scss']
})
export class PreviewExamComponent {

  @Input() examModel : ExamModel | undefined = undefined;
  idExam = signal(0);

  constructor(
    private router: Router
  ){
    this.idExam.set(this.examModel?.idExam || 0);
  }

  onStartExam() {
    this.router.navigate(['/platform/exam', this.idExam()]);
  }

}
