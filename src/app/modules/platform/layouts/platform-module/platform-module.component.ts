import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModuleModel } from '@platform-model/user-module.model';
import { UserModuleService } from '@platform-service/user-module.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-platform-module',
  templateUrl: './platform-module.component.html',
  styleUrls: ['./platform-module.component.scss']
})
export class PlatformModuleComponent {

  userModuleModel = signal<UserModuleModel | undefined>(undefined);
  idModule = signal<number>(0);

  constructor(
    private userModuleService: UserModuleService,
    private activatedRoute: ActivatedRoute,
    private dialog: Dialog,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.idModule.set(params['idModule'] || 1);
    });
    this.userModuleService.getFindByModule(this.idModule()).subscribe({
      next: (data) => {
        if (data.status <= 0) {
          this.dialog.open(DialogErrorAlertComponent, {
            width: '400px',
            data: data,
          });
        }
        this.userModuleModel.set(data.object);
      }
    });
  }

}
