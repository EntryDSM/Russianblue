import { NAME, PASSWORD, PHONE_CODE, PHONE_NUMBER, SIGN_UP, RULE_CHECK } from './interface';

export const setName = (payload: string) => ({
  type: NAME,
  payload,
});

export const setPassword = (payload: string) => ({
  type: PASSWORD,
  payload,
});

export const setPhoneNumber = (payload: string) => ({
  type: PHONE_NUMBER,
  payload,
});

export const setPhoneCode = (payload: string) => ({
  type: PHONE_CODE,
  payload,
});

export const setRuleCheck = (payload: boolean) => ({
  type: RULE_CHECK,
  payload,
});

export { NAME, PASSWORD, PHONE_CODE, PHONE_NUMBER, SIGN_UP, RULE_CHECK };

export type signupActionType =
  | ReturnType<typeof setName>
  | ReturnType<typeof setPassword>
  | ReturnType<typeof setPhoneNumber>
  | ReturnType<typeof setPhoneCode>
  | ReturnType<typeof setRuleCheck>;
