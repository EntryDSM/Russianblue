export const INPUT = 'grade/INPUT' as const;
export const GRADE = 'grade/GRADE' as const;
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
  };
};
export type semesterType = {
  freshmanFirst: boolean;
  freshmanSecond: boolean;
  sophomoreFirst: boolean;
  sophomoreSecond: boolean;
  seniorFirst: boolean;
};
