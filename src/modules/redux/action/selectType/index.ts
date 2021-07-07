import { selectTypeSaveType, selectTypeType } from 'src/constance/SelectType';
import { error } from '../../../../models/error';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_MONTH,
  GRADUATION_YEAR,
  REMARK,
  SELECTTYPE,
  SELECTTYPE_FAILURE,
  SELECTTYPE_SUCCESS,
  GET_SELECTTYPE,
  GET_SELECTTYPE_FAILURE,
  GET_SELECTTYPE_SUCCESS,
} from './interface';

export const setType = (payload: string) => ({
  type: TYPE,
  payload,
});

export const setSocialType = (payload: string) => ({
  type: SOCIALTYPE,
  payload,
});

export const setArea = (payload: boolean) => ({
  type: AREA,
  payload,
});

export const setGraduation = (payload: string) => ({
  type: GRADUATION,
  payload,
});

export const setGraduationYear = (payload: number) => ({
  type: GRADUATION_YEAR,
  payload,
});

export const setGraduationMonth = (payload: number) => ({
  type: GRADUATION_MONTH,
  payload,
});

export const setRemark = (payload: string) => ({
  type: REMARK,
  payload,
});

export const selectType = (payload: selectTypeSaveType) => ({
  type: SELECTTYPE,
  payload,
});

export const selectTypeSuccess = (payload: boolean) => ({
  type: SELECTTYPE_SUCCESS,
  payload,
});

export const selectTypeFailure = (payload: error) => ({
  type: SELECTTYPE_FAILURE,
  payload,
});

export const getSelectType = () => ({
  type: GET_SELECTTYPE,
});

export const getSelectTypeSuccess = (payload: selectTypeType) => ({
  type: GET_SELECTTYPE_SUCCESS,
  payload,
});

export const getSelectTypeFailure = (payload: error) => ({
  type: GET_SELECTTYPE_FAILURE,
  payload,
});

export type selectTypeActionType =
  | ReturnType<typeof setType>
  | ReturnType<typeof setSocialType>
  | ReturnType<typeof setArea>
  | ReturnType<typeof setGraduation>
  | ReturnType<typeof setGraduationYear>
  | ReturnType<typeof setGraduationMonth>
  | ReturnType<typeof setRemark>
  | ReturnType<typeof selectType>
  | ReturnType<typeof selectTypeSuccess>
  | ReturnType<typeof selectTypeFailure>
  | ReturnType<typeof getSelectType>
  | ReturnType<typeof getSelectTypeSuccess>
  | ReturnType<typeof getSelectTypeFailure>;
