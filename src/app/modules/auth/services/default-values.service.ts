import { Injectable } from '@angular/core';
import { BasicUserModel } from '@auth-model/auth.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DefaultValuesService {

  public user: BasicUserModel = {
    username: 'luis12248',
    role: 'admin',
    name: 'Luis Antonio',
    lastName: 'Calvo Quispe',
    urlPhoto: 'https://static.platzi.com/media/avatars/avatars/luis122448_ac7390d4-8893-4a46-9a7c-6be0ef544d85.png',
    email: 'luis122448@gmail.com',
    address: '',
    phone: '939232327',
    comment: '',
  }

  constructor(
    private cookieService: CookieService) {
      this.setCookieValue('user', [this.user])
  }

  public getCookieValue(key: string): any[] {
    const cookieValue = this.cookieService.get(key)
    if(cookieValue) {
      return JSON.parse(cookieValue)
    }
    return []
  }

  public getCookie(key: string): string {
    return this.cookieService.get(key);
  }

  public setCookieValue(key: string, value: any[]): void{
    this.cookieService.delete(key)
    const cookieValue = JSON.stringify(value)
    this.cookieService.set(key, cookieValue)
  }

  public setCookie(key: string, value: string): void {
    this.cookieService.set(key, value);
  }

  public removeCookie(key: string): void {
    this.cookieService.delete(key);
  }



}
