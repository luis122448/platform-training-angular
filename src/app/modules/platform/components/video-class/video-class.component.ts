import { Component, OnInit, OnDestroy, ViewChild, ElementRef, signal } from '@angular/core';
import { GlobalStatusService } from '../../services/global-status.service';
import { UserClassModel, ViewInfoClassModel } from '../../models/user-class.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatasourceClassService } from '../../services/datasource-class.service';
import { ActivatedRoute } from '@angular/router';
import { UserClassService } from '@platform-service/user-class.service';
import { Dialog } from '@angular/cdk/dialog';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { CommentClassModel } from '@platform-model/comment-class.model';

@Component({
  selector: 'app-video-class',
  templateUrl: './video-class.component.html',
  styleUrls: ['./video-class.component.scss']
})
export class VideoClassComponent implements OnInit, OnDestroy{

  objectUserClassModel = signal<UserClassModel | null>(null)
  listCommentClassModel = signal<CommentClassModel[]>([]);
  idCourse = signal<number>(0);
  idClass = signal<number>(0);
  urlVideo: string = '';
  idVideo: string = '';
  progress: boolean = false;
  finalized: boolean = false;

  constructor(
    private globalStatusService: GlobalStatusService,
    private activatedRoute: ActivatedRoute,
    private userClassService: UserClassService,
    private dialog: Dialog,
  ) { }
  ngOnDestroy(): void {
    // if (this.viewInfoClass){
    //   this.viewInfoClass.isShow = true;
    //   // this.viewInfoClass.currentTimeVideo =  this.videoPlayer.nativeElement.currentTimeVideo;
    //   // this.datasourceClassService.putViewUpdate(this.viewInfoClass);
    // }
  }

  ngOnInit(): void {
    this.globalStatusService.setLoading(true)
    this.activatedRoute.params.subscribe(params => {
      this.idCourse.set(params['idCourse'] || 1);
      this.idClass.set(params['idClass'] || 1);
    });
    this.userClassService.getFindByClass(this.idClass()).subscribe({
      next: data =>{
        if(data.status<=0){
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data
          })
        }
        this.objectUserClassModel.set(data.object);
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

  onVideoPlay(){
    if (!this.objectUserClassModel){
      return;
    }
    this.progress = true;
    // this.datasourceClassService.putViewUpdate(this.viewInfoClass);
    console.log('onVideoPlay');
  }
  onVideoPause(){
    console.log('onVideoPause');
  }
  onVideoEnded(){
    if (!this.objectUserClassModel){
      return;
    }
    // this.viewInfoClass.isShow = true;
    // this.viewInfoClass.isComplete = true;
    // this.viewInfoClass.currentTimeVideo = '0';
    // this.datasourceClassService.putViewUpdate(this.viewInfoClass);
    console.log('onVideoEnded');
  }

  onStateChange(event: any){
    // console.log('onStateChange', event);
    if(event.data === 0) {
      // this.onVideoEnded();
    } else if(event.data === -1) {
      // this.onVideoPlay();
    }
    else if(event.data === 2) {
      // this.onVideoPause();
    }

  }

  onReady(event: any){
    console.log('onReady', event);
  }

}
