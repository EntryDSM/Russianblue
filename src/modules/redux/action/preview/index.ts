import { error } from '../../../../models/error';
import { GET_PREVIEW, GET_PREVIEW_SUCCESS, GET_PREVIEW_FAILURE } from './interface';

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

export type previewActionType =
  | ReturnType<typeof getPreview>
  | ReturnType<typeof getPreviewSuccess>
  | ReturnType<typeof getPreviewFailure>;
