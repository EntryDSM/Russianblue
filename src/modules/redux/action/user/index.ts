import { PHONE_NUMBER } from './interface';

export const setPhoneNumber = (payload: string) => ({
  type: PHONE_NUMBER,
  payload,
});

type userActionType = ReturnType<typeof setPhoneNumber>;
export { PHONE_NUMBER };
export type { userActionType };
