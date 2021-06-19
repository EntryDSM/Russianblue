import {
  SELF_INTRODUCTION,
  STUDY_PLAN,
  SELF_INTRODUCTION_SUCCESS,
  SELF_INTRODUCTION_FAILURE,
  GET_SELF_INTRODUCTION_SUCCESS,
  GET_SELF_INTRODUCTION_FAILURE,
  STUDY_PLAN_SUCCESS,
  STUDY_PLAN_FAILURE,
  SET_SELF_INTRODUCTION,
  SET_STUDY_PLAN,
  GET_STUDY_PLAN_SUCCESS,
  GET_STUDY_PLAN_FAILURE,
  GET_STUDY_PLAN,
  GET_SELF_INTRODUCTION,
} from './interface';
import { error } from '../../../../models/error';

export const introduction = () => ({
  type: SELF_INTRODUCTION,
});

export const studyPlan = () => ({
  type: STUDY_PLAN,
});

export const setSelfIntroduction = (payload: string) => ({
  type: SET_SELF_INTRODUCTION,
  payload,
});

export const setStudyPlan = (payload: string) => ({
  type: SET_STUDY_PLAN,
  payload,
});

export const selfIntroductionSuccess = () => ({
  type: SELF_INTRODUCTION_SUCCESS,
});

export const selfIntroductionFailure = (payload: error) => ({
  type: SELF_INTRODUCTION_FAILURE,
  payload,
});

export const getSelfIntroductionSuccess = (payload: string) => ({
  type: GET_SELF_INTRODUCTION_SUCCESS,
  payload,
});

export const getSelfIntroductionFailure = (payload: error) => ({
  type: GET_SELF_INTRODUCTION_FAILURE,
  payload,
});

export const studyPlanSuccess = () => ({
  type: STUDY_PLAN_SUCCESS,
});

export const studyPlanFailure = (payload: error) => ({
  type: STUDY_PLAN_FAILURE,
  payload,
});

export const getStudyPlanSuccess = (payload: string) => ({
  type: GET_STUDY_PLAN_SUCCESS,
  payload,
});

export const getStudyPlanFailure = (payload: error) => ({
  type: GET_STUDY_PLAN_FAILURE,
  payload,
});

export const getSelfIntroduction = () => ({
  type: GET_SELF_INTRODUCTION,
});

export const getStudyPlan = () => ({
  type: GET_STUDY_PLAN,
});

export type introductionActionType =
  | ReturnType<typeof setSelfIntroduction>
  | ReturnType<typeof setStudyPlan>
  | ReturnType<typeof selfIntroductionSuccess>
  | ReturnType<typeof selfIntroductionFailure>
  | ReturnType<typeof getSelfIntroductionSuccess>
  | ReturnType<typeof getSelfIntroductionFailure>
  | ReturnType<typeof studyPlanSuccess>
  | ReturnType<typeof studyPlanFailure>
  | ReturnType<typeof getStudyPlanSuccess>
  | ReturnType<typeof getStudyPlanFailure>
  | ReturnType<typeof getSelfIntroduction>
  | ReturnType<typeof getStudyPlan>;
