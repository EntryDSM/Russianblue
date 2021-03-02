import {
  NEW_PASSWORD,
  RESET_PASSWORD_ERROR,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
} from './interface';

export const setNewPassword = (payload: string) => ({
  type: NEW_PASSWORD,
  payload,
});

export const setVertifyCode = (payload: string) => ({
  type: VERTIFY_CODE,
  payload,
});

export const setVertifyPhoneNumber = (payload: string) => ({
  type: VERTIFY_PHONE_NUMBER,
  payload,
});

export const setResetPasswordError = (payload: string) => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});

export { VERTIFY_CODE, VERTIFY_PHONE_NUMBER, NEW_PASSWORD };
export type resetPasswordActionType =
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof setVertifyCode>
  | ReturnType<typeof setVertifyPhoneNumber>
  | ReturnType<typeof setResetPasswordError>;
