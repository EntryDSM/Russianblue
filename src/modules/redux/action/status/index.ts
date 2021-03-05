import { processTimeType } from '../../reducer/status/interface';
import { statusType } from '../../reducer/status/mainConstance';
import {
  IS_END,
  IS_START,
  STATUS,
  PROCESS,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  GET_STATUS,
} from './interface';

export const setStatus = (payload: statusType) => ({
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

export const getStatusSuccess = (payload: Array<processTimeType>) => ({
  type: STATUS_SUCCESS,
  payload,
});

export const getStatusFailure = (payload: number) => ({
  type: STATUS_FAILURE,
  payload,
});

export const getStatus = () => ({
  type: GET_STATUS,
});

export { IS_END, IS_START, STATUS, PROCESS };
export type statusActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>;
