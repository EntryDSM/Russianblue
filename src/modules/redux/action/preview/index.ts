import { error } from '../../../../models/error';
import { GET_PREVIEW, GET_PREVIEW_SUCCESS, GET_PREVIEW_FAILURE } from './interface';
import { createAction } from 'typesafe-actions';

export const getPreview = createAction(GET_PREVIEW)();
export const getPreviewSuccess = createAction(GET_PREVIEW_SUCCESS)<string>();
export const getPreviewFailure = createAction(GET_PREVIEW_FAILURE)<error>();

export type previewActionType =
  | ReturnType<typeof getPreview>
  | ReturnType<typeof getPreviewSuccess>
  | ReturnType<typeof getPreviewFailure>;