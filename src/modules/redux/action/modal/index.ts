import { MODAL_ON, MODAL_OFF } from './interface';

export const setModalOn = (payload: string) => ({
  type: MODAL_ON,
  payload,
});

export const setModalOff = (payload: string) => ({
  type: MODAL_OFF,
  payload,
});
export { MODAL_ON, MODAL_OFF };
export type modalActionType = ReturnType<typeof setModalOff> | ReturnType<typeof setModalOn>;
