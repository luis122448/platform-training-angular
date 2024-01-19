import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ApiResponseList, ApiResponseObject } from '@platform-model/api-response.model';
import { UserCourseModel } from '@platform-model/user-course.model';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService {

  API_URL = environment.API_URL;
  PATH_URL = '/users-course';

  constructor(
    private httpCliente: HttpClient
  ) { }

  getFindByCourse(idCourse: number) {
    const httpParams = new HttpParams().set('idCourse', idCourse.toString());
    return this.httpCliente.get<ApiResponseObject<UserCourseModel>>(`${this.API_URL}${this.PATH_URL}/by-course`, { params: httpParams });
  }

  getFindByModule(idModule: number) {
    const httpParams = new HttpParams().set('idModule', idModule.toString());
    return this.httpCliente.get<ApiResponseList<UserCourseModel>>(`${this.API_URL}${this.PATH_URL}/by-module`, { params: httpParams });
  }

}
