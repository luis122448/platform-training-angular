import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponseList, ApiResponseObject } from '@platform-model/api-response.model';
import { CommentModel } from '@platform-model/comment-class.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  API_URL = environment.API_URL;
  PATH_URL = '/comment';

  constructor(
    private httpCliente: HttpClient
  ) { }

  postSave(idCommentRef:number, comment: CommentModel) {
    let params = new HttpParams().set('idCommentRef', idCommentRef.toString());
    return this.httpCliente.post<ApiResponseObject<CommentModel>>(`${this.API_URL}${this.PATH_URL}`, comment, { params });
  }

  putUpdate(idComment: number, likeComment: number, dislikeComment: number) {
    let params = new HttpParams().set('idComment', idComment.toString());
    params = params.append('likeComment', likeComment.toString());
    params = params.append('dislikeComment', dislikeComment.toString());
    return this.httpCliente.put<ApiResponseObject<CommentModel>>(`${this.API_URL}${this.PATH_URL}`, { }, { params });
  }

  deleteDelete(idComment: number) {
    let params = new HttpParams().set('idComment', idComment.toString());
    return this.httpCliente.delete<ApiResponseObject<CommentModel>>(`${this.API_URL}${this.PATH_URL}`, { params });
  }

}
