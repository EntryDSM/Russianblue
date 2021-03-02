import { IS_END, IS_START, STATUS, PROCESS } from './interface';

export const setStatus = (payload: string) => ({
  type: STATUS,
  payload,
});

export const setProcess = (payload: Object) => ({
  type: PROCESS,
  payload,
});

export const setIsStart = (payload: boolean) => ({
  type: IS_START,
  payload,
});

export const setIsEnd = (payload: boolean) => ({
  type: IS_END,
  payload,
});

export { IS_END, IS_START, STATUS, PROCESS };
export type statusActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>;
