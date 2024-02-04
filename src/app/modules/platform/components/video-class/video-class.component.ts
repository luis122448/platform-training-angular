import { Component, OnInit, OnDestroy, ViewChild, ElementRef, signal, Input, ChangeDetectorRef } from '@angular/core';
import { GlobalStatusService } from '../../services/global-status.service';
import { UserClassModel, ViewInfoClassModel } from '../../models/user-class.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatasourceClassService } from '../../services/datasource-class.service';
import { ActivatedRoute } from '@angular/router';
import { UserClassService } from '@platform-service/user-class.service';
import { Dialog } from '@angular/cdk/dialog';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-video-class',
  templateUrl: './video-class.component.html',
  styleUrls: ['./video-class.component.scss']
})
export class VideoClassComponent implements OnInit, OnDestroy{

  @Input() userClassModel: UserClassModel | undefined = undefined;
  progress: boolean = false;
  finalized: boolean = false;

  @ViewChild('videoContainer') demoYouTubePlayer: ElementRef<HTMLDivElement> | undefined;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(
    private globalStatusService: GlobalStatusService,
    private userClassService: UserClassService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: Dialog,
  ) { }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    if(!this.userClassModel){
      return;
    }
    this.globalStatusService.setLoading(true);
    const userClassModel = {
      ...this.userClassModel,
      isShow: this.progress,
      isComplete: this.finalized,
      currentTimeVideo: '0',
    }
    this.userClassService.putUpdate(this.userClassModel.idClass, userClassModel).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
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
    })
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    if (this.demoYouTubePlayer) {
      this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
      this.videoHeight = this.videoWidth * 0.6;
      this.changeDetectorRef.detectChanges();
    }
  }

  onVideoPlay(){
    if (!this.userClassModel){
      return;
    }
    this.progress = true;
    console.log('onVideoPlay');
  }
  onVideoPause(){
    console.log('onVideoPause');
  }
  onVideoEnded(){
    if (!this.userClassModel){
      return;
    }
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
