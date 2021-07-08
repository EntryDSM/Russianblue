import { userResponse } from 'src/models/dto/response/userResponse';
import { error } from 'src/models/error';
import {
  NAME,
  PHONE_NUMBER,
  GET_USER,
  IS_ADMISSION_FEE_PAYED,
  IS_FINAL_SUBMIT_DONE,
  IS_RECEIVE_MAIL,
  STUDY_PLAN_LENGTH,
  SELF_INTRODUCE_LENGTH,
  SUBMIT_TIME,
  APPLICATION_TYPE,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setPhoneNumber = createAction(PHONE_NUMBER)<string>();
export const setName = createAction(NAME)<string>();
export const setIsAdmissionFeePayed = createAction(IS_ADMISSION_FEE_PAYED)<boolean>();
export const setIsFinalSubmitDone = createAction(IS_FINAL_SUBMIT_DONE)<boolean>();
export const setIsReceivMain = createAction(IS_RECEIVE_MAIL)<boolean>();
export const setStudyPlanLength = createAction(STUDY_PLAN_LENGTH)<number>();
export const setSelfIntroduceLength = createAction(SELF_INTRODUCE_LENGTH)<number>();
export const setSubmitTime = createAction(SUBMIT_TIME)<string>();
export const setApplicationType = createAction(APPLICATION_TYPE)<string>();
export const getUser = createAction(GET_USER)();
export const getUserFailure = createAction(GET_USER_FAILURE)<error>();
export const getUserSuccess = createAction(GET_USER_SUCCESS)<userResponse>();

export type userActionType =
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setName>
  | ReturnType<typeof setIsAdmissionFeePayed>
  | ReturnType<typeof setIsFinalSubmitDone>
  | ReturnType<typeof setIsReceivMain>
  | ReturnType<typeof setStudyPlanLength>
  | ReturnType<typeof setSelfIntroduceLength>
  | ReturnType<typeof getUserFailure>
  | ReturnType<typeof getUserSuccess>;

export {
  NAME,
  PHONE_NUMBER,
  GET_USER,
  IS_ADMISSION_FEE_PAYED,
  IS_FINAL_SUBMIT_DONE,
  IS_RECEIVE_MAIL,
  STUDY_PLAN_LENGTH,
  SELF_INTRODUCE_LENGTH,
  SUBMIT_TIME,
  APPLICATION_TYPE,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
};
