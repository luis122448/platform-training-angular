import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import {
  ApiResponseList,
  ApiResponseObject,
} from '@platform-model/api-response.model';
import { UserModuleModel } from '@platform-model/user-module.model';

@Injectable({
  providedIn: 'root',
})
export class UserModuleService {
  API_URL = environment.API_URL;
  PATH_URL = '/module';

  constructor(private httpClient: HttpClient) {}

  getFindByModule(idModule: number) {
    const httpParams = new HttpParams().set('idModule', idModule.toString());
    return this.httpClient.get<ApiResponseObject<UserModuleModel>>(
      `${this.API_URL}${this.PATH_URL}/by-module`,
      { params: httpParams }
    );
  }
}
