import {
  NAME,
  PHONE_NUMBER,
  GET_USER,
  IS_ADMISSION_FEE_PAYED,
  IS_FINAL_SUBMIT_DONE,
  IS_RECEIVE_MAIL,
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

export type userActionType =
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setName>
  | ReturnType<typeof setIsAdmissionFeePayed>
  | ReturnType<typeof setIsFinalSubmitDone>
  | ReturnType<typeof setIsReceivMain>;
export { PHONE_NUMBER, NAME, GET_USER };
