export const INPUT = 'grade/INPUT' as const;
export const GRADE = 'grade/GRADE' as const;
export type GradeType = {
  korean: { 11: string; 12: string; 21: string; 22: string; 31: string };
  social: { 11: string; 12: string; 21: string; 22: string; 31: string };
  history: { 11: string; 12: string; 21: string; 22: string; 31: string };
  math: { 11: string; 12: string; 21: string; 22: string; 31: string };
  science: { 11: string; 12: string; 21: string; 22: string; 31: string };
  technical: { 11: string; 12: string; 21: string; 22: string; 31: string };
  english: { 11: string; 12: string; 21: string; 22: string; 31: string };
};
