import { signinRequest } from 'src/models/dto/request/signinRequest';
import { error } from 'src/models/error';
import {
  ERROR,
  ID,
  PASSWORD,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';

export const setId = createAction(ID)<string>();
export const setPassword = createAction(PASSWORD)<string>();
export const setError = createAction(ERROR)<number>();
export const signinFailure = createAction(SIGNIN_FAILURE)<error>();
export const signinSuccess = createAction(SIGNIN_SUCCESS)<string>();
export const signin = createAction(SIGNIN)<signinRequest>();
export const refreshToken = createAction(REFRESH_TOKEN)<{ callback: () => void }>();
export const refreshTokenFailure = createAction(REFRESH_TOKEN_FAILURE)<error>();
export const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS)();

export type signinActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setError>
  | ReturnType<typeof signinFailure>
  | ReturnType<typeof signinSuccess>
  | ReturnType<typeof refreshToken>
  | ReturnType<typeof refreshTokenFailure>
  | ReturnType<typeof refreshTokenSuccess>;

export {
  ID,
  PASSWORD,
  ERROR,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
};
