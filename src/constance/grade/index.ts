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
  { id: 'freshmanFirst', grade: 1, semester: 1 },
  { id: 'freshmanSecond', grade: 1, semester: 2 },
  { id: 'sophomoreFirst', grade: 2, semester: 1 },
  { id: 'sophomoreSecond', grade: 2, semester: 2 },
  { id: 'seniorFirst', grade: 3, semester: 1 },
  { id: 'seniorSecond', grade: 3, semester: 2 },
];
export const SUBJECT = ['korean', 'social', 'history', 'math', 'science', 'technical', 'english'];

export type GradeType = {
  korean: string;
  social: string;
  history: string;
  math: string;
  science: string;
  technical: string;
  english: string;
  isCheck: {
    freshmanFirst: boolean;
    freshmanSecond: boolean;
    sophomoreFirst: boolean;
    sophomoreSecond: boolean;
    seniorFirst: boolean;
    seniorSecond: boolean;
  };
};
export type SemesterType = {
  freshmanFirst: boolean;
  freshmanSecond: boolean;
  sophomoreFirst: boolean;
  sophomoreSecond: boolean;
  seniorFirst: boolean;
  seniorSecond: boolean;
};
