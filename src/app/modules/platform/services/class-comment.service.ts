import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponseList } from '@platform-model/api-response.model';
import { CommentModel } from '@platform-model/comment-class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassCommentService {

  API_URL = environment.API_URL;
  PATH_URL = '/class-comment';

  constructor(
    private httpCliente: HttpClient
  ) { }

  getFindByClass(idClass: number) {
    const httpParams = new HttpParams().set('idClass', idClass.toString());
    return this.httpCliente.get<ApiResponseList<CommentModel>>(`${this.API_URL}${this.PATH_URL}/by-class`, { params: httpParams });
  }

}
