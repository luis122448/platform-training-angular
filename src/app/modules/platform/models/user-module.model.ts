import { UserCourseModel } from "./user-course.model";

export interface UserModuleModel {
  idCompany: number;
  idUser: number;
  idModule: number;
  title: string;
  description: string;
  markdownContent: string;
  urlIcon: string;
  urlLogo: string;
  urlBackground: string;
  locked: boolean;
  begin: boolean;
  progress: boolean;
  finalized: boolean;
  advance: number;
  requiredTime: number;
  userCourseModelList: UserCourseModel[];
}
