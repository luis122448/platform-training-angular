import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth-service/auth.service';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { DialogDeleteQuestionComponent } from '@shared-component/dialog-delete-question/dialog-delete-question.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  faSquareXmark = faSquareXmark;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: Dialog
  ) { }

  openDialogSesion(){
    const dialogCloseSesion = this.dialog.open(DialogDeleteQuestionComponent,{
      width: '400px',
      data: { status: -1, message: 'Esta seguro de cerrar sesión ?' }
    })
    dialogCloseSesion.closed
    .subscribe(data =>{
      if (data) {
        this.authService.postLogout()
        this.router.navigate(['/login'])
      }
    })
  }

}
