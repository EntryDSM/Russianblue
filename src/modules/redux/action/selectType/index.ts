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
  AUTOSAVE_SELECTTYPE,
  AUTOSAVE_SELECTTYPE_FAILURE,
  AUTOSAVE_SELECTTYPE_SUCCESS,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setType = createAction(TYPE)<string>();
export const setSocialType = createAction(SOCIALTYPE)<string>();
export const setArea = createAction(AREA)<boolean>();
export const setGraduation = createAction(GRADUATION)<string>();
export const setGraduationYear = createAction(GRADUATION_YEAR)<number>();
export const setGraduationMonth = createAction(GRADUATION_MONTH)<number>();
export const setRemark = createAction(REMARK)<string>();
export const selectType = createAction(SELECTTYPE)<{
  educationalStatus: string;
  applicationType: string;
  isDaejeon: boolean;
  applicationRemark: string;
  graduatedAt: string;
}>();
export const selectTypeSuccess = createAction(SELECTTYPE_SUCCESS)<boolean>();
export const selectTypeFailure = createAction(SELECTTYPE_FAILURE)<error>();
export const autoSaveSelectType = createAction(AUTOSAVE_SELECTTYPE)<{
  educationalStatus: string;
  applicationType: string;
  isDaejeon: boolean;
  applicationRemark: string;
  graduatedAt: string;
}>();
export const autoSaveSelectTypeSuccess = createAction(AUTOSAVE_SELECTTYPE_SUCCESS)();
export const autoSaveSelectTypeFailure = createAction(AUTOSAVE_SELECTTYPE_FAILURE)<error>();
export const getSelectType = createAction(GET_SELECTTYPE)();
export const getSelectTypeSuccess = createAction(GET_SELECTTYPE_SUCCESS)<{
  educational_status: string;
  application_type: string;
  is_daejeon: boolean;
  application_remark: string | null;
  graduated_at: string;
}>();
export const getSelectTypeFailure = createAction(GET_SELECTTYPE_FAILURE)<error>();


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
  | ReturnType<typeof autoSaveSelectType>
  | ReturnType<typeof autoSaveSelectTypeSuccess>
  | ReturnType<typeof autoSaveSelectTypeFailure>
  | ReturnType<typeof getSelectType>
  | ReturnType<typeof getSelectTypeSuccess>
  | ReturnType<typeof getSelectTypeFailure>;
