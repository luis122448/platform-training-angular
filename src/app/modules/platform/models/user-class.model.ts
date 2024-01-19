import { CommentClassModel } from "./comment-class.model";
import { BasicTeacherModel } from "./teacher.model";

export interface UserClassModel {

    idUser: number;
    idClass: number;
    typeClass: string;
    position: number;
    title: string;
    description: string;
    markdownContent: string;
    urlImage: string;
    idVideo: string;
    urlVideo: string;
    locked: boolean;
    begin: boolean;
    progress: boolean;
    finalized: boolean;
    advance: number;
    requiredTime: number;
    commentModelList: CommentClassModel[];
    teacherModel: BasicTeacherModel;

}

export interface ViewInfoClassModel {
    idClass: number;
    idCurse: number;
    isShow: boolean;
    isComplete: boolean;
    currentTimeVideo: string;
}

