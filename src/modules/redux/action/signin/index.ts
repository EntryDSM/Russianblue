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

export const setId = (payload: string) => ({
  type: ID,
  payload,
});

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload,
});

export const setError = (payload: number) => ({
  type: ERROR,
  payload,
});

export const signinFailure = (payload: error) => ({
  type: SIGNIN_FAILURE,
  payload,
});

export const signinSuccess = (payload: string) => ({
  type: SIGNIN_SUCCESS,
  payload,
});

export const signin = (payload: signinRequest) => ({
  type: SIGNIN,
  payload,
});

export const refreshToken = (payload: { callback: () => void }) => ({
  type: REFRESH_TOKEN,
  payload,
});

export const refreshTokenFailure = (payload: error) => ({
  type: REFRESH_TOKEN_FAILURE,
  payload,
});

export const refreshTokenSuccess = () => ({
  type: REFRESH_TOKEN_SUCCESS,
});

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
