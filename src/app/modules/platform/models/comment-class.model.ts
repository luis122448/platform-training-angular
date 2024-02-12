export interface CommentModel {
  idCommentRef?: number;
  idComment: number;
  idClass: number;
  typeComment: string;
  registerUser: number;
  username: string;
  urlPhoto: string;
  registerDate: Date | number[];
  specialDate?: string;
  likeComment: number;
  dislikeComment: number;
  markdownContent: string;
  commentModelList: CommentModel[];
}
