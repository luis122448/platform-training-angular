import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamModel } from '@platform-model/exam-model';
import { ExamService } from '@platform-service/exam.service';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-platform-exam-preview',
  templateUrl: './platform-exam-preview.component.html',
  styleUrls: ['./platform-exam-preview.component.scss']
})
export class PlatformExamPreviewComponent implements OnInit {

  idCourse = signal<number>(0);
  idExam = signal<number>(0);
  examModel = signal<ExamModel | undefined>(undefined);

  constructor(
    private globalStatusService: GlobalStatusService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private examService: ExamService,
    private dialog: Dialog,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.idCourse.set(params['idCourse'] || 1);
    });
  }

  ngOnInit(): void {
    this.globalStatusService.setLoading(true);
    this.examService.getByIdCourse(this.idCourse()).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
        this.examModel.set(data.object);
        this.idExam.set(data.object.idExam);
      },
      error: (err) => {
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: err.error,
        });
        this.globalStatusService.setLoading(false);
      },
      complete: () => {
        this.globalStatusService.setLoading(false);
      }
    });
  }

}
