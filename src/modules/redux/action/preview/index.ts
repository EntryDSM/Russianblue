import { error } from '../../../../models/error';
import {
  GET_PREVIEW,
  GET_PREVIEW_SUCCESS,
  GET_PREVIEW_FAILURE,
  FINAL,
  FINAL_SUCCESS,
  FINAL_FAILURE,
} from './interface';
import { createAction } from 'typesafe-actions';

export const getPreview = createAction(GET_PREVIEW)();
export const getPreviewSuccess = createAction(GET_PREVIEW_SUCCESS)<string>();
export const getPreviewFailure = createAction(GET_PREVIEW_FAILURE)<error>();
export const final = createAction(FINAL)();
export const finalSuccess = createAction(FINAL_SUCCESS)();
export const finalFailure = createAction(FINAL_FAILURE)<error>();

export type previewActionType =
  | ReturnType<typeof getPreview>
  | ReturnType<typeof getPreviewSuccess>
  | ReturnType<typeof getPreviewFailure>
  | ReturnType<typeof final>
  | ReturnType<typeof finalSuccess>
  | ReturnType<typeof finalFailure>;
