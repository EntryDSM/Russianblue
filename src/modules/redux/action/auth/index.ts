import { ACCESS_TOKEN, IS_LOGIN } from './inteface';
import { createAction } from 'typesafe-actions'


export const setAccessToken = createAction(ACCESS_TOKEN)<string>();
export const setIsLogin = createAction(IS_LOGIN)<boolean>();


export { ACCESS_TOKEN, IS_LOGIN };

export type authActionType = ReturnType<typeof setAccessToken> | ReturnType<typeof setIsLogin>;
