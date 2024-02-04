import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { ApiResponseList, ApiResponseObject } from '@platform-model/api-response.model';
import { UserClassModel } from '@platform-model/user-class.model';

@Injectable({
  providedIn: 'root'
})
export class UserClassService {

  API_URL = environment.API_URL;
  PATH_URL = '/users-class';

  constructor(
    private httpCliente: HttpClient
  ) { }

  getFindByClass(idClass: number) {
    const httpParams = new HttpParams().set('idClass', idClass.toString());
    return this.httpCliente.get<ApiResponseObject<UserClassModel>>(`${this.API_URL}${this.PATH_URL}/by-class`, { params: httpParams });
  }

  getFindByCourse(idCourse: number) {
    const httpParams = new HttpParams().set('idCourse', idCourse.toString());
    return this.httpCliente.get<ApiResponseList<UserClassModel>>(`${this.API_URL}${this.PATH_URL}/by-course`, { params: httpParams });
  }

  postGenerateByCourse(idCourse: number, idUser: number) {
    return this.httpCliente.post<ApiResponseList<UserClassModel>>(`${this.API_URL}${this.PATH_URL}/generate-by-course`, {
      idCourse,
      idUser
    });
  }

  putUpdate(idClass: number, data: UserClassModel){
    const httpParams = new HttpParams().set('idClass', idClass.toString());
    return this.httpCliente.put<ApiResponseObject<UserClassModel>>(`${this.API_URL}${this.PATH_URL}`, data, { params: httpParams });
  }

}
