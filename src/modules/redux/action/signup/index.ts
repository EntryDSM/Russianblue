import { checkVertifyRequest, signupRequest } from '../../../../models/dto/request/signupRequest';
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
} from './interface';

export const setName = (payload: string) => ({
  type: NAME,
  payload,
});

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload,
});

export const setPhoneNumber = (payload: string) => ({
  type: PHONE_NUMBER,
  payload,
});

export const setPhoneCode = (payload: string) => ({
  type: PHONE_CODE,
  payload,
});

export const setRuleCheck = (payload: boolean) => ({
  type: RULE_CHECK,
  payload,
});

export const sendVertifyCode = (payload: string) => ({
  type: SEND_VERTIFY_CODE,
  payload,
});

export const signup = (payload: signupRequest) => ({
  type: SIGNUP,
  payload,
});

export const checkVertifyCode = (payload: checkVertifyRequest) => ({
  type: CHECK_VERTIFY_CODE,
  payload,
});

export const signupSuccess = (payload: boolean) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const sendVertifyCodeSuccess = (payload: boolean) => ({
  type: SEND_VERTIFY_CODE_SUCCESS,
  payload,
});

export const checkVertifyCodeSuccess = (payload: boolean) => ({
  type: CHECK_VERTIFY_CODE_SUCCESS,
  payload,
});

export const signupFailure = (payload: error) => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const checkVertifyCodeFailure = (payload: error) => ({
  type: CHECK_VERTIFY_CODE_FAILURE,
  payload,
});

export const sendVertifyCodeFailure = (payload: error) => ({
  type: SEND_VERTIFY_CODE_FAILURE,
  payload,
});

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
};

export type signupActionType =
  | ReturnType<typeof setName>
  | ReturnType<typeof setPassword>
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
  | ReturnType<typeof checkVertifyCode>;
