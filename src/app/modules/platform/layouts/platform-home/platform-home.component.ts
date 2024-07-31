import { Dialog } from '@angular/cdk/dialog';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultValuesService } from '@auth-service/default-values.service';
import { UserModuleModel } from '@platform-model/user-module.model';
import { GlobalStatusService } from '@platform-service/global-status.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';

@Component({
  selector: 'app-platform-home',
  templateUrl: './platform-home.component.html',
  styleUrls: ['./platform-home.component.scss']
})
export class PlatformHomeComponent {

  listModules = signal<UserModuleModel[] | null>([]);

  constructor(
    private globalStatusService: GlobalStatusService,
    private defaultValuesService: DefaultValuesService,
    private dialog: Dialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const metadata = this.defaultValuesService.getLocalStorageValue('metadata');
    if(metadata){
      this.listModules.set(metadata.modules);
    } else {
      this.dialog.open(DialogErrorAlertComponent, {
        width: '400px',
        data: { status: -1, message: 'El usuario no tiene módulos asignados!'},
      });
    }
  }

  // selectModule(idModule: number) {
  //   this.router.navigate(['/platform/module', idModule], {
  //     relativeTo: this.activatedRoute,
  //   });
  // }

}
