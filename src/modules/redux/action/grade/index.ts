import { INPUT, GRADE, GradeType } from './interface';

export const setInput = (payload: { name: string; value: number }) => ({
  type: INPUT,
  payload,
});

export const setGrade = (payload: { grade: GradeType }) => ({
  type: GRADE,
  payload,
});

export type gradeActionType = ReturnType<typeof setInput> | ReturnType<typeof setGrade>;
