import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponseObject } from '@platform-model/api-response.model';
import { ExamModel } from '@platform-model/exam-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  API_URL = environment.API_URL;
  PATH_URL = '/exam';

  constructor(
    private httpClient: HttpClient
  ) { }

  getByIdCourse(idCourse: number) {
    let params = new HttpParams().set('idCourse', idCourse.toString());
    return this.httpClient.get<ApiResponseObject<ExamModel>>(`${this.API_URL}${this.PATH_URL}/by-course`,{params});
  }

}
