export interface ExamModel {
  idCompany: number;
  idExam: number;
  idCourse: number;
  courseTitle: string;
  courseUrlIcon: string;
  typeExam: string;
  title: string;
  description: string;
  markdownContent: string;
  numberQuestions: number;
  time: number;
  minScore: number;
  maxAttempts: number;
}
