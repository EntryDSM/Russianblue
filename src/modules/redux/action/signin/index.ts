import { signinRequest } from 'src/models/dto/request/signinRequest';
import { error } from 'src/models/error';
import { ERROR, ID, PASSWORD, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNIN } from './interface';

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

export type signinActionType =
  | ReturnType<typeof setId>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setError>
  | ReturnType<typeof signinFailure>
  | ReturnType<typeof signinSuccess>;

export { ID, PASSWORD, ERROR, SIGNIN, SIGNIN_FAILURE, SIGNIN_SUCCESS };
