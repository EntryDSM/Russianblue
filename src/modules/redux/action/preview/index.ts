import { error } from '../../../../models/error';
import {
  GET_PREVIEW,
  GET_PREVIEW_SUCCESS,
  GET_PREVIEW_FAILURE,
  FINAL,
  FINAL_SUCCESS,
  FINAL_FAILURE,
} from './interface';

export const getPreview = () => ({
  type: GET_PREVIEW,
});

export const getPreviewSuccess = (payload: string) => ({
  type: GET_PREVIEW_SUCCESS,
  payload,
});

export const getPreviewFailure = (payload: error) => ({
  type: GET_PREVIEW_FAILURE,
  payload,
});

export const final = () => ({
  type: FINAL,
});

export const finalSuccess = () => ({
  type: FINAL_SUCCESS,
});

export const finalFailure = (payload: error) => ({
  type: FINAL_FAILURE,
  payload,
});

export type previewActionType =
  | ReturnType<typeof getPreview>
  | ReturnType<typeof getPreviewSuccess>
  | ReturnType<typeof getPreviewFailure>
  | ReturnType<typeof final>
  | ReturnType<typeof finalSuccess>
  | ReturnType<typeof finalFailure>;
