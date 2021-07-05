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

export const setPhoneNumber = (payload: string) => ({
  type: PHONE_NUMBER,
  payload,
});

export const setName = (payload: string) => ({
  type: NAME,
  payload,
});

export const setIsAdmissionFeePayed = (payload: boolean) => ({
  type: IS_ADMISSION_FEE_PAYED,
  payload,
});

export const setIsFinalSubmitDone = (payload: boolean) => ({
  type: IS_FINAL_SUBMIT_DONE,
  payload,
});

export const setIsReceivMain = (payload: boolean) => ({
  type: IS_RECEIVE_MAIL,
  payload,
});

export const setStudyPlanLength = (payload: number) => ({
  type: STUDY_PLAN_LENGTH,
  payload,
});

export const setSelfIntroduceLength = (payload: number) => ({
  type: SELF_INTRODUCE_LENGTH,
  payload,
});

export const setSubmitTime = (payload: string) => ({
  type: SUBMIT_TIME,
  payload,
});

export const setApplicationType = (payload: string) => ({
  type: APPLICATION_TYPE,
  payload,
});

export const getUser = () => ({
  type: GET_USER,
});

export const getUserFailure = (payload: error) => ({
  type: GET_USER_FAILURE,
  payload,
});

export const getUserSuccess = (payload: userResponse) => ({
  type: GET_USER_SUCCESS,
  payload,
});

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
