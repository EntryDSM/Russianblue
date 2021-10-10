import {
  checkVertifyRequest,
  signupRequest,
  signupVertifyCodeRequest,
} from '../../../../models/dto/request/signupRequest';
import { error } from '../../../../models/error';
import {
  NAME,
  PASSWORD,
  PHONE_CODE,
  PHONE_NUMBER,
  SIGNUP,
  RULE_CHECK,
  SIGNUP_SUCCESS,
  SEND_VERTIFY_CODE_SUCCESS,
  CHECK_VERTIFY_CODE_SUCCESS,
  CHECK_VERTIFY_CODE_FAILURE,
  SIGNUP_FAILURE,
  SEND_VERTIFY_CODE_FAILURE,
  SEND_VERTIFY_CODE,
  CHECK_VERTIFY_CODE,
  RESET,
  PASSWORD_CHECK,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setName = createAction(NAME)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const setPasswordCheck = createAction(PASSWORD_CHECK)<string>();
export const setPhoneNumber = createAction(PHONE_NUMBER)<string>();
export const setPhoneCode = createAction(PHONE_CODE)<string>();
export const setRuleCheck = createAction(RULE_CHECK)<boolean>();
export const sendVertifyCode = createAction(SEND_VERTIFY_CODE)<signupVertifyCodeRequest>();
export const signup = createAction(SIGNUP)<signupRequest>();
export const checkVertifyCode = createAction(CHECK_VERTIFY_CODE)<checkVertifyRequest>();
export const signupSuccess = createAction(SIGNUP_SUCCESS)<boolean>();
export const sendVertifyCodeSuccess = createAction(SEND_VERTIFY_CODE_SUCCESS)<boolean>();
export const checkVertifyCodeSuccess = createAction(CHECK_VERTIFY_CODE_SUCCESS)<boolean>();
export const signupFailure = createAction(SIGNUP_FAILURE)<error>();
export const checkVertifyCodeFailure = createAction(CHECK_VERTIFY_CODE_FAILURE)<error>();
export const sendVertifyCodeFailure = createAction(SEND_VERTIFY_CODE_FAILURE)<error>();
export const reset = createAction(RESET)();

export {
  NAME,
  PASSWORD,
  PHONE_CODE,
  PHONE_NUMBER,
  SIGNUP,
  RULE_CHECK,
  SEND_VERTIFY_CODE_FAILURE,
  SEND_VERTIFY_CODE_SUCCESS,
  CHECK_VERTIFY_CODE_FAILURE,
  CHECK_VERTIFY_CODE_SUCCESS,
  SEND_VERTIFY_CODE,
  CHECK_VERTIFY_CODE,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  RESET,
  PASSWORD_CHECK,
};

export type signupActionType =
  | ReturnType<typeof setName>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setPasswordCheck>
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setPhoneCode>
  | ReturnType<typeof setRuleCheck>
  | ReturnType<typeof signupFailure>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof sendVertifyCodeSuccess>
  | ReturnType<typeof sendVertifyCodeFailure>
  | ReturnType<typeof checkVertifyCodeSuccess>
  | ReturnType<typeof checkVertifyCodeFailure>
  | ReturnType<typeof signup>
  | ReturnType<typeof sendVertifyCode>
  | ReturnType<typeof checkVertifyCode>
  | ReturnType<typeof reset>;
