import { error } from '../../../../models/error';
import { GradeType, gradeType, getGradeType } from '../../../../constance/grade';
import { createAction } from 'typesafe-actions'
import {
  INPUT,
  GRADE,
  SAVE_GRADE,
  SAVE_GRADE_FAILURE,
  SAVE_GRADE_SUCCESS,
  GET_GRADE,
  GET_GRADE_FAILURE,
  GET_GRADE_SUCCESS,
} from './interface';

export const setInput = createAction(INPUT)<{ name: string; value: number }>();
export const setGrade = createAction(GRADE)<{ grade: GradeType }>();
export const grade = createAction(SAVE_GRADE)<gradeType>();
export const gradeSuccess = createAction(SAVE_GRADE_SUCCESS)();
export const gradeFailure = createAction(SAVE_GRADE_FAILURE)<error>();
export const getGrade = createAction(GET_GRADE)();
export const getGradeSuccess = createAction(GET_GRADE_SUCCESS)<getGradeType>();
export const getGradeFailure = createAction(GET_GRADE_FAILURE)<error>();


export type gradeActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setGrade>
  | ReturnType<typeof grade>
  | ReturnType<typeof gradeSuccess>
  | ReturnType<typeof gradeFailure>
  | ReturnType<typeof getGrade>
  | ReturnType<typeof getGradeSuccess>
  | ReturnType<typeof getGradeFailure>;
