import { Injectable } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
// import { ViewInfoClassModel, InfoClassModel, SyllabusClassModel } from '../models/user-class.model';
import { UserCourseModel } from '../models/user-course.model';
import { BehaviorSubject } from 'rxjs';
import { GlobalStatusService } from './global-status.service';

@Injectable({
  providedIn: 'root'
})
export class DatasourceClassService {

  // dataSourceInfoClass = new InfoClassDataSource();
  // sourceInfoClass: InfoClassModel[] = [];
  // sourceInfoCourse: UserCourseModel[] = [];
  // sourceSyllabusClass: SyllabusClassModel[] = [];

//   constructor(
//     private globalStatusService: GlobalStatusService,
//   ) {
//     this.sourceInfoCourse = [
//       {
//         idCurse: 1,
//         title: 'Planilla de Recursos Humanos',
//         description: 'Planilla de Recursos Humanos',
//         markdownContent: '',
//         icon: 'https://testing.grupotsiperu.com.pe:8844/assets/images/logo-tsi-tres.png',
//         background: '',
//         teachers: [{
//           idTeacher: 1,
//           name: 'Luis Antonio Calvo Quispe',
//           icon: 'https://static.platzi.com/media/avatars/avatars/luis122448_ac7390d4-8893-4a46-9a7c-6be0ef544d85.png',
//         }],
//       }
//     ]
//     this.sourceInfoClass = [
//       {
//         idClass: 1,
//         idCurse: 1,
//         position: 1,
//         title: 'Configuracion',
//         description: 'Configuracion de la Planilla de Sueldos',
//         image: '',
//         urlVideo: 'https://www.youtube.com/embed/koWWF7jwdK8',
//         idVideo: 'koWWF7jwdK8',
//         idTeacher: 1,
//         nameTeacher: 'Luis Antonio Calvo Quispe',
//         imageTeacher: '',
//         comments: [],
//         resources: [],
//       },
//       {
//         idClass: 2,
//         idCurse: 1,
//         position: 2,
//         title: 'Centro de Costo',
//         description: 'Configuracion y Asignacion de Centros de Costos al Personal',
//         image: '',
//         urlVideo: 'https://www.youtube.com/embed/89U_qY29s-g',
//         idVideo: '89U_qY29s-g',
//         idTeacher: 1,
//         nameTeacher: 'Luis Antonio Calvo Quispe',
//         imageTeacher: '',
//         comments: [],
//         resources: [],
//       },
//       {
//         idClass: 3,
//         idCurse: 1,
//         position: 3,
//         title: 'Personal',
//         description: 'Personal de la Planilla',
//         image: '',
//         urlVideo: 'https://www.youtube.com/embed/gvdFeK2HpHM',
//         idVideo: 'gvdFeK2HpHM',
//         idTeacher: 1,
//         nameTeacher: 'Luis Antonio Calvo Quispe',
//         imageTeacher: '',
//         comments: [],
//         resources: [],
//       },
//       {
//         idClass: 4,
//         idCurse: 1,
//         position: 4,
//         title: 'Personal',
//         description: 'Prestamos al Personal de la Planilla',
//         image: '',
//         urlVideo: 'https://www.youtube.com/embed/ZSGHWCe-A_E',
//         idVideo: 'ZSGHWCe-A_E',
//         idTeacher: 1,
//         nameTeacher: 'Luis Antonio Calvo Quispe',
//         imageTeacher: '',
//         comments: [],
//         resources: [],
//       },
//       {
//         idClass: 5,
//         idCurse: 1,
//         position: 5,
//         title: 'Procesar Planilla',
//         description: 'Prestamos al Personal de la Planilla',
//         image: '',
//         urlVideo: 'https://www.youtube.com/embed/IdBJbjKuMHw',
//         idVideo: 'IdBJbjKuMHw',
//         idTeacher: 1,
//         nameTeacher: 'Luis Antonio Calvo Quispe',
//         imageTeacher: '',
//         comments: [],
//         resources: [],
//       },
//     ];
//     this.sourceSyllabusClass = [
//       {
//         idClass: 1,
//         idCurse: 1,
//         position: 1,
//         title: 'Configuracion',
//         isDivider: true,
//         isShow: true,
//         isComplete: true
//       },
//       {
//         idClass: 1,
//         idCurse: 1,
//         position: 1,
//         title: 'Configuracion',
//         isDivider: false,
//         isShow: true,
//         isComplete: true
//       },
//       {
//         idClass: 2,
//         idCurse: 1,
//         position: 2,
//         title: 'Centro de Costo',
//         isDivider: false,
//         isShow: true,
//         isComplete: false
//       },
//       {
//         idClass: 3,
//         idCurse: 1,
//         position: 3,
//         title: 'Personal',
//         isDivider: false,
//         isShow: true,
//         isComplete: false
//       },
//       {
//         idClass: 4,
//         idCurse: 1,
//         position: 4,
//         title: 'Personal',
//         isDivider: false,
//         isShow: true,
//         isComplete: false
//       },
//       {
//         idClass: 1,
//         idCurse: 1,
//         position: 1,
//         title: 'Proceso',
//         isDivider: true,
//         isShow: true,
//         isComplete: false
//       },
//       {
//         idClass: 5,
//         idCurse: 1,
//         position: 5,
//         title: 'Procesar Planilla',
//         isDivider: false,
//         isShow: true,
//         isComplete: false
//       },
//     ]
//     this.dataSourceInfoClass.setData(this.sourceInfoClass);
//     this.globalStatusService.setCurrentSyllabusClass(this.sourceSyllabusClass);
//     this.globalStatusService.setCurrentInfoCourse(this.sourceInfoCourse[0]);
//     this.globalStatusService.setCurrentInfoClass(this.sourceInfoClass[0]);
//   }

//   getInfoCourse(idCurse: number): InfoCourseModel | undefined {
//     return this.sourceInfoCourse.find((item) => item.idCurse === idCurse);
//   }

//   getInfoClass(idClass: number): InfoClassModel | undefined {
//     return this.dataSourceInfoClass.getData().find((item) => item.idClass === idClass);
//   }

//   getSyllabusClass(idCurse: number): SyllabusClassModel[] {
//     return this.sourceSyllabusClass.filter((item) => item.idCurse === idCurse) || [];
//   }

//   putViewUpdate(data: ViewInfoClassModel){
//     const index = this.sourceInfoClass.findIndex((item) => item.idClass === data.idClass);
//     const temporalSyllabus = this.globalStatusService.getCurrentSyllabusClass()
//     const indexSyllabus = temporalSyllabus.findIndex((item) => item.idClass === data.idClass);
//     if (index >= 0){
//       this.sourceInfoClass[index].isShow = data.isShow;
//       this.sourceInfoClass[index].isComplete = data.isComplete;
//       this.sourceInfoClass[index].currentTimeVideo = data.currentTimeVideo;
//       this.dataSourceInfoClass.setData(this.sourceInfoClass);
//     }
//     if (indexSyllabus >= 0){
//       temporalSyllabus[indexSyllabus].isShow = data.isShow;
//       temporalSyllabus[indexSyllabus].isComplete = data.isComplete;
//       this.globalStatusService.setCurrentSyllabusClass(temporalSyllabus);
//     }
//   }

// }

// export class InfoClassDataSource extends DataSource<InfoClassModel> {

//   private classSubject = new BehaviorSubject<InfoClassModel[]>([]);

//   constructor( ) {
//     super();
//   }

//   connect(): BehaviorSubject<InfoClassModel[]> {
//     return this.classSubject;
//   }

//   disconnect(): void {
//     this.classSubject.complete();
//   }

//   public setData(data: InfoClassModel[]) {
//     this.classSubject.next(data);
//   }

//   public addData(data: InfoClassModel) {
//     this.classSubject.next([...this.classSubject.getValue(), data]);
//   }

//   public getData(): InfoClassModel[] {
//     return this.classSubject.getValue();
//   }

}
