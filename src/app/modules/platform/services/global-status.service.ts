import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatusService {

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable()

  constructor(
    private ngxSpinnerService: NgxSpinnerService
  ) {}

  getLoading() {
    return this.isLoadingSubject.getValue();
  }

  setLoading(isLoading: boolean) {
    this.isLoadingSubject.next(isLoading);
    if(isLoading){
      this.ngxSpinnerService.show()
    } else {
      this.ngxSpinnerService.hide()
    }
  }

}
