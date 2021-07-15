import {
  checkVertifyCodeRequest,
  resetPasswordRequest,
  resetPasswordVertifyCodeRequest,
} from '../../../../models/dto/request/signupRequest';
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
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  CHECK_VERTIFY_CODE,
  SEND_RESET_PASSWORD_VERTIFY_CODE,
  RESET_STATE,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setNewPassword = createAction(NEW_PASSWORD)<string>();
export const setVertifyCode = createAction(VERTIFY_CODE)<string>();
export const setVertifyPhoneNumber = createAction(VERTIFY_PHONE_NUMBER)<string>();
export const setResetPasswordError = createAction(RESET_PASSWORD_ERROR)<error>();
export const sendResetPasswordVertifyCodeSuccess = createAction(
  SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
)();
export const sendResetPasswordVertifyCodeFailure = createAction(
  SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
)<error>();
export const checkVertifyCodeSuccess = createAction(CHECK_VERTIFY_CODE_SUCCESS)<boolean>();
export const checkVertifyCodeFailure = createAction(CHECK_VERTIFY_CODE_FAILURE)<error>();
export const resetPasswordSuccess = createAction(RESET_PASSWORD_SUCCESS)<boolean>();
export const resetPasswordFailure = createAction(RESET_PASSWORD_FAILURE)<error>();
export const resetPassword = createAction(RESET_PASSWORD)<resetPasswordRequest>();
export const checkVertifyCode = createAction(CHECK_VERTIFY_CODE)<checkVertifyCodeRequest>();
export const sendResetPasswordVertifyCode = createAction(
  SEND_RESET_PASSWORD_VERTIFY_CODE,
)<resetPasswordVertifyCodeRequest>();
export const resetState = createAction(RESET_STATE)();

export {
  NEW_PASSWORD,
  RESET_PASSWORD_ERROR,
  SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
  SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
  CHECK_VERTIFY_CODE_FAILURE,
  CHECK_VERTIFY_CODE_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD,
  CHECK_VERTIFY_CODE,
  SEND_RESET_PASSWORD_VERTIFY_CODE,
  RESET_STATE,
};
export type resetPasswordActionType =
  | ReturnType<typeof setNewPassword>
  | ReturnType<typeof setVertifyCode>
  | ReturnType<typeof setVertifyPhoneNumber>
  | ReturnType<typeof setResetPasswordError>
  | ReturnType<typeof sendResetPasswordVertifyCodeFailure>
  | ReturnType<typeof sendResetPasswordVertifyCodeSuccess>
  | ReturnType<typeof checkVertifyCodeSuccess>
  | ReturnType<typeof checkVertifyCodeFailure>
  | ReturnType<typeof resetPasswordFailure>
  | ReturnType<typeof resetPasswordSuccess>
  | ReturnType<typeof resetPassword>
  | ReturnType<typeof resetState>;
