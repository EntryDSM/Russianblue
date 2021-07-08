import {
  SELF_INTRODUCTION,
  STUDY_PLAN,
  SAVE_BOTH,
  SELF_INTRODUCTION_SUCCESS,
  SELF_INTRODUCTION_FAILURE,
  GET_SELF_INTRODUCTION_SUCCESS,
  GET_SELF_INTRODUCTION_FAILURE,
  STUDY_PLAN_SUCCESS,
  STUDY_PLAN_FAILURE,
  GET_STUDY_PLAN_SUCCESS,
  GET_STUDY_PLAN_FAILURE,
  GET_STUDY_PLAN,
  GET_SELF_INTRODUCTION,
  SAVE_BOTH_SUCCESS,
  SAVE_BOTH_FAILURE,
} from './interface';
import { error } from '../../../../models/error';
import { createAction } from 'typesafe-actions';

export const setSelfIntroduction = createAction(SELF_INTRODUCTION)<string>();
export const setStudyPlan = createAction(STUDY_PLAN)<string>();
export const saveBoth = createAction(SAVE_BOTH)<{ selfIntroduction: string; studyPlan: string }>();
export const saveBothSuccess = createAction(SAVE_BOTH_SUCCESS)<boolean>();
export const saveBothFailure = createAction(SAVE_BOTH_FAILURE)<error>();
export const selfIntroductionSuccess = createAction(SELF_INTRODUCTION_SUCCESS)();
export const selfIntroductionFailure = createAction(SELF_INTRODUCTION_FAILURE)<error>();
export const getSelfIntroductionSuccess = createAction(GET_SELF_INTRODUCTION_SUCCESS)<string>();
export const getSelfIntroductionFailure = createAction(GET_SELF_INTRODUCTION_FAILURE)<error>();
export const studyPlanSuccess = createAction(STUDY_PLAN_SUCCESS)();
export const studyPlanFailure = createAction(STUDY_PLAN_FAILURE)<error>();
export const getStudyPlanSuccess = createAction(GET_STUDY_PLAN_SUCCESS)<string>();
export const getStudyPlanFailure = createAction(GET_STUDY_PLAN_FAILURE)<error>();
export const getSelfIntroduction = createAction(GET_SELF_INTRODUCTION)();
export const getStudyPlan = createAction(GET_STUDY_PLAN)();

export type introductionActionType =
  | ReturnType<typeof setSelfIntroduction>
  | ReturnType<typeof setStudyPlan>
  | ReturnType<typeof saveBoth>
  | ReturnType<typeof selfIntroductionSuccess>
  | ReturnType<typeof selfIntroductionFailure>
  | ReturnType<typeof getSelfIntroductionSuccess>
  | ReturnType<typeof getSelfIntroductionFailure>
  | ReturnType<typeof studyPlanSuccess>
  | ReturnType<typeof studyPlanFailure>
  | ReturnType<typeof getStudyPlanSuccess>
  | ReturnType<typeof getStudyPlanFailure>
  | ReturnType<typeof getSelfIntroduction>
  | ReturnType<typeof getStudyPlan>
  | ReturnType<typeof saveBothSuccess>
  | ReturnType<typeof saveBothFailure>;
