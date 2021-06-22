import { error } from '../../../../models/error';
import {
  NEW_PASSWORD,
  RESET_PASSWORD_ERROR,
  SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
  SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
  CHECK_VERTIFY_CODE_FAILURE,
  CHECK_VERTIFY_CODE_SUCCESS,
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

export const setResetPasswordError = (payload: error) => ({
  type: RESET_PASSWORD_ERROR,
  payload,
});

export const sendResetPasswordVertifyCodeSuccess = () => ({
  type: SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
});

export const sendResetPasswordVertifyCodeFailure = (payload: error) => ({
  type: SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
  payload,
});

export const checkVertifyCodeSuccess = (payload: boolean) => ({
  type: CHECK_VERTIFY_CODE_SUCCESS,
  payload,
});

export const checkVertifyCodeFailure = (payload: error) => ({
  type: CHECK_VERTIFY_CODE_FAILURE,
  payload,
});

export {
  NEW_PASSWORD,
  RESET_PASSWORD_ERROR,
  SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
  SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
  CHECK_VERTIFY_CODE_FAILURE,
  CHECK_VERTIFY_CODE_SUCCESS,
};
export type resetPasswordActionType =
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof setVertifyCode>
  | ReturnType<typeof setVertifyPhoneNumber>
  | ReturnType<typeof setResetPasswordError>
  | ReturnType<typeof sendResetPasswordVertifyCodeFailure>
  | ReturnType<typeof sendResetPasswordVertifyCodeSuccess>
  | ReturnType<typeof checkVertifyCodeSuccess>
  | ReturnType<typeof checkVertifyCodeFailure>;
