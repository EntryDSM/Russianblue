import { error } from '../../../../models/error';
import { GradeType, gradeType, getGradeType } from '../../../../constance/grade';
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

export const setInput = (payload: { name: string; value: number }) => ({
  type: INPUT,
  payload,
});

export const setGrade = (payload: { grade: GradeType }) => ({
  type: GRADE,
  payload,
});

export const grade = (payload: gradeType) => ({
  type: SAVE_GRADE,
  payload,
});

export const gradeSuccess = () => ({
  type: SAVE_GRADE_SUCCESS,
});

export const gradeFailure = (payload: error) => ({
  type: SAVE_GRADE_FAILURE,
  payload,
});

export const getGrade = () => ({
  type: GET_GRADE,
});

export const getGradeSuccess = (payload: getGradeType) => ({
  type: GET_GRADE_SUCCESS,
  payload,
});

export const getGradeFailure = (payload: error) => ({
  type: GET_GRADE_FAILURE,
  payload,
});

export type gradeActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setGrade>
  | ReturnType<typeof grade>
  | ReturnType<typeof gradeSuccess>
  | ReturnType<typeof gradeFailure>
  | ReturnType<typeof getGrade>
  | ReturnType<typeof getGradeSuccess>
  | ReturnType<typeof getGradeFailure>;
