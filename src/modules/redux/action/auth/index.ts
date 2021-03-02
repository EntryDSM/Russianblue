import { ACCESS_TOKEN } from './inteface';

export const setAccessToken = (payload: string) => ({
  type: ACCESS_TOKEN,
  payload,
});

export { ACCESS_TOKEN };

export type authActionType = ReturnType<typeof setAccessToken>;
