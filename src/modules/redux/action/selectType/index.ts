import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_MONTH,
  GRADUATION_YEAR,
  REMARK,
} from './interface';

export const setType = (payload: string) => ({
  type: TYPE,
  payload,
});

export const setSocialType = (payload: string) => ({
  type: SOCIALTYPE,
  payload,
});

export const setArea = (payload: string) => ({
  type: AREA,
  payload,
});

export const setGraduation = (payload: string) => ({
  type: GRADUATION,
  payload,
});

export const setGraduationYear = (payload: number) => ({
  type: GRADUATION_YEAR,
  payload,
});

export const setGraduationMonth = (payload: number) => ({
  type: GRADUATION_MONTH,
  payload,
});

export const setRemark = (payload: string) => ({
  type: REMARK,
  payload,
});

export type selectTypeActionType =
  | ReturnType<typeof setType>
  | ReturnType<typeof setSocialType>
  | ReturnType<typeof setArea>
  | ReturnType<typeof setGraduation>
  | ReturnType<typeof setGraduationYear>
  | ReturnType<typeof setGraduationMonth>
  | ReturnType<typeof setRemark>;
