import { BasicTeacherModel } from "./teacher.model"
import { UserClassModel } from "./user-class.model"

export interface UserCourseModel {
  idCompany: number
  idUser: number
  idCourse: number
  title: string
  description: string
  urlIcon: string
  urlLogo: string
  urlBackground: string
  locked: boolean
  begin: boolean
  progress: boolean
  finalized: boolean
  advance: number
  requiredTime: number
  teacherModel: BasicTeacherModel
  userClassModelList: UserClassModel[]

}
