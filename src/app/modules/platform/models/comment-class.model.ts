export interface CommentClassModel {
  idComment: number;
  idClass: number;
  type: string;
  registerUser: number;
  username: string;
  urlPhoto: string;
  registedDate: string;
  likeComment: number;
  dislikeComment: number;
  markdownContent: string;
  commentModelList: CommentClassModel[];
}
