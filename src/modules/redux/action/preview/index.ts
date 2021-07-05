import { PREVIEW } from './interface';

export const setPreview = (payload: string) => ({
  type: PREVIEW,
  payload,
});

export type previewActionType = ReturnType<typeof setPreview>;
