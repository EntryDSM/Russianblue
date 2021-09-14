export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const ENTERGRADE = '2022년 지원자 성적 입력';
export const GRADE = [
  { grade: 'A', id: 'a' },
  { grade: 'B', id: 'b' },
  { grade: 'C', id: 'c' },
  { grade: 'D', id: 'd' },
  { grade: 'E', id: 'e' },
  { grade: 'X', id: 'X' },
];
export const GRADEANDSEMESTER = [
  { id: 'seniorSecond', grade: 3, semester: 2 },
  { id: 'seniorFirst', grade: 3, semester: 1 },
  { id: 'previousSemester', grade: 2, semester: 2 },
  { id: 'morePreviousSemester', grade: 2, semester: 1 },
];
export const SUBJECT = ['korean', 'social', 'history', 'math', 'science', 'technical', 'english'];

export const SUBJECTANDTITLE = [
  { title: '국어', subject: 'korean' },
  { title: '사회', subject: 'social' },
  { title: '역사', subject: 'history' },
  { title: '수학', subject: 'math' },
  { title: '과학', subject: 'science' },
  { title: '기술가정', subject: 'technical' },
  { title: '영어', subject: 'english' },
];

export type GradeType = {
  korean: string;
  social: string;
  history: string;
  math: string;
  science: string;
  technical: string;
  english: string;
};
export type SemesterType = {
  freshmanFirst: boolean;
  freshmanSecond: boolean;
  sophomoreFirst: boolean;
  sophomoreSecond: boolean;
  seniorFirst: boolean;
  seniorSecond: boolean;
};

export type gradeType = {
  volunteerTime: number;
  absence: number;
  truancy: number;
  lateness: number;
  leave: number;
  korean: string;
  social: string;
  history: string;
  math: string;
  science: string;
  technical: string;
  english: string;
};

export type getGradeType = {
  volunteer_time: number;
  day_absence_count: number;
  lecture_absence_count: number;
  lateness_count: number;
  early_leave_count: number;
  korean_grade: string;
  social_grade: string;
  history_grade: string;
  math_grade: string;
  science_grade: string;
  tech_and_home_grade: string;
  english_grade: string;
};

export interface gradeInterface {
  volunteer_time: number | null;
  day_absence_count: number | null;
  lecture_absence_count: number | null;
  lateness_count: number | null;
  early_leave_count: number | null;
  korean_grade: string | null;
  social_grade: string | null;
  history_grade: string | null;
  math_grade: string | null;
  science_grade: string | null;
  tech_and_home_grade: string | null;
  english_grade: string | null;
}
