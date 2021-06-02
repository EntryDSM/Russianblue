import { INPUT, GENDER, BIRTHDATE, BIRTHMONTH, BIRTHYEAR } from './interface';

export const setInput = (payload: { name: string; value: string }) => ({
  type: INPUT,
  payload,
});

export const setGender = (payload: string) => ({
  type: GENDER,
  payload,
});

export const setBirthYear = (payload: number) => ({
  type: BIRTHYEAR,
  payload,
});

export const setBirthMonth = (payload: number) => ({
  type: BIRTHMONTH,
  payload,
});

export const setBirthDate = (payload: number) => ({
  type: BIRTHDATE,
  payload,
});

export type informationActionType =
  | ReturnType<typeof setInput>
  | ReturnType<typeof setBirthYear>
  | ReturnType<typeof setBirthMonth>
  | ReturnType<typeof setBirthDate>
  | ReturnType<typeof setGender>;
