import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@auth-service/token.service';
import { DialogErrorAlertComponent } from '@shared-component/dialog-error-alert/dialog-error-alert.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private dialog: Dialog
  ){}

  canActivate(): boolean {
      const data = this.tokenService.isValidRefreshTokenAdvanced()
      if(data.object){
        return true
      } else {
        // Cuando se rechaza el acceso, porque el Token a vencido
        this.dialog.open(DialogErrorAlertComponent, {
          width: '400px',
          data: data
        })
        this.tokenService.removeToken() // Eliminamos el Token vencido
        this.tokenService.removeRefreshToken()
        this.router.navigate(['/auth/login']) // Redirigimos al inicio
        return false
      }
  }

}
