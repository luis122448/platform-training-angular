export interface CommentModel {
  idCommentRef?: number;
  idComment: number;
  idClass: number;
  typeComment: string;
  registerUser: number;
  username: string;
  urlPhoto: string;
  registerDate: Date | Number[];
  likeComment: number;
  dislikeComment: number;
  markdownContent: string;
  commentModelList: CommentModel[];
}
