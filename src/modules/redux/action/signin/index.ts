import { ID, PASSWORD } from './interface';

export const setId = (payload: string) => ({
  type: ID,
  payload,
});

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload,
});

export type signinActionType = ReturnType<typeof setId> | ReturnType<typeof setPassword>;

export { ID, PASSWORD };
