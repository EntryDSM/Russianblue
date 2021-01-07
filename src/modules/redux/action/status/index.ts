import { IS_END, IS_START, STATUS, DESCRIPTION } from './interface';

export const setStatus = (payload: string) => ({
  type: STATUS,
  payload,
});

export const setDescription = (payload: string) => ({
  type: DESCRIPTION,
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
export { IS_END, IS_START, STATUS, DESCRIPTION };
export type statusActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setDescription>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>;
