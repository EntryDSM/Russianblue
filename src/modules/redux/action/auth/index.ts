import { ACCESS_TOKEN, IS_LOGIN } from './inteface';

export const setAccessToken = (payload: string) => ({
  type: ACCESS_TOKEN,
  payload,
});

export const setIsLogin = (payload: boolean) => ({
  type: IS_LOGIN,
  payload,
});

export { ACCESS_TOKEN, IS_LOGIN };

export type authActionType = ReturnType<typeof setAccessToken> | ReturnType<typeof setIsLogin>;
