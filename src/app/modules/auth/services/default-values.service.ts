import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DefaultValuesService {

  constructor(
    private cookieService: CookieService) {
  }

  public getCookieValue(key: string): any {
    const cookieValue = this.cookieService.get(key)
    if(cookieValue) {
      return JSON.parse(cookieValue)
    }
    return []
  }

  public getCookie(key: string): string {
    return this.cookieService.get(key);
  }

  public setCookieValue(key: string, value: any): void{
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

  public getLocalStorageValue(key: string): any {
    const localStorageValue = localStorage.getItem(key);
    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    }
    return [];
  }

  public getLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setLocalStorageValue(key: string, value: any): void {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  public setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  public removeAllLocalStorage(): void {
    localStorage.clear();
  }

}
