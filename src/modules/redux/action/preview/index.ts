import { PREVIEW } from './interface';
import { createAction } from 'typesafe-actions';

export const setPreview = createAction(PREVIEW)<string>();

export type previewActionType = ReturnType<typeof setPreview>;
