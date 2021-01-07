import { NAME, PHONE_NUMBER, GET_USER } from './interface';

export const setPhoneNumber = (payload: string) => ({
  type: PHONE_NUMBER,
  payload,
});

export const setName = (payload: string) => ({
  type: NAME,
  payload,
});

export type userActionType = ReturnType<typeof setPhoneNumber> | ReturnType<typeof setName>;
export { PHONE_NUMBER, NAME, GET_USER };
