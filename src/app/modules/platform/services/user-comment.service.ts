import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ApiResponseList, ApiResponseObject } from '@platform-model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserCommentService {

  API_URL = environment.API_URL;
  PATH_URL = '/users-class';

  constructor(
    private httpCliente: HttpClient
  ) { }

}
