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
import { createAction } from 'typesafe-actions';

export const setStatus = createAction(STATUS)<statusType>();
export const setProcess = createAction(PROCESS)<Object>();
export const setIsStart = createAction(IS_START)<boolean>();
export const setIsEnd = createAction(IS_END)<boolean>();
export const getStatusSuccess = createAction(STATUS_SUCCESS)<{
  schedules: Array<processTimeType>;
  current_status: string;
}>();
export const getStatusFailure = createAction(STATUS_FAILURE)<number>()
export const getStatus = createAction(GET_STATUS)();


export { IS_END, IS_START, STATUS, PROCESS };
export type statusActionType =
  | ReturnType<typeof setStatus>
  | ReturnType<typeof setProcess>
  | ReturnType<typeof setIsStart>
  | ReturnType<typeof setIsEnd>
  | ReturnType<typeof getStatusSuccess>
  | ReturnType<typeof getStatusFailure>
  | ReturnType<typeof getStatus>;
