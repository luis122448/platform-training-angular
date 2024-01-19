import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenService } from '@auth-service/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ){}

  canActivate(): boolean {
      const isValidToken = this.tokenService.isValidRefreshToken()
      // if(isValidToken){
      //   return true
      // } else {
      //   // Cuando se rechaza el acceso, porque el Token a vencido
      //   this.tokenService.removeToken() // Eliminamos el Token vencido
      //   this.tokenService.removeRefreshToken()
      //   this.router.navigate(['/login']) // Redirigimos al inicio
      //   return true
      // }
      return true
  }

}
