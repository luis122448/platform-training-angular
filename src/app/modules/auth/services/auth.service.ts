import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { switchMap, tap } from 'rxjs/operators';
import { ApiResponseAuth, AuthRespnseObject } from '@auth-model/auth.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.API_URL
  AUTH = '/auth'
  constructor(
    private httpClient:HttpClient,
    private tokenService:TokenService
  ) { }

  postLogin(company: string, username: string, password: string){
    return this.httpClient.post<ApiResponseAuth<any>>(`${this.API_URL}${this.AUTH}/login`,{
      company,
      username,
      password
    }).pipe(
      tap(data =>{
        if(data.status === 1 && data.object?.token && data.object?.refreshToken){
          this.tokenService.saveToken(data.object.token)
          this.tokenService.saveRefreshToken(data.object.refreshToken)
        } else {
          this.tokenService.removeToken()
          this.tokenService.removeRefreshToken()
        }
      })
    )
  }

  postVerifyCode(company: string, username: string, verifyCode: string){
    return this.httpClient.post<ApiResponseAuth<AuthRespnseObject>>(`${this.API_URL}${this.AUTH}/verify-code`,{
      company,
      username,
      verifyCode
    }).pipe(
      tap(data =>{
        if(data.status === 1 && data.object?.token && data.object?.refreshToken){
          this.tokenService.saveToken(data.object.token)
          this.tokenService.saveRefreshToken(data.object.refreshToken)
        } else {
          this.tokenService.removeToken()
          this.tokenService.removeRefreshToken()
        }
      })
    )
  }

  postRefreshToken(refreshToken: string){
    return this.httpClient.post<ApiResponseAuth<AuthRespnseObject>>(`${this.API_URL}${this.AUTH}/refreshtoken`, {refreshToken})
    .pipe(
      tap(data =>{
        if(data.status === 1 && data.object?.token && data.object?.refreshToken){
          this.tokenService.saveToken(data.object.token)
          this.tokenService.saveRefreshToken(data.object.refreshToken)
        } else {
          this.tokenService.removeToken()
          this.tokenService.removeRefreshToken()
        }
      })
    )
  }

  postLogout(){
    this.tokenService.removeToken()
    this.tokenService.removeRefreshToken()
  }

}
