import Introduction from './interface';
import { introductionActionType } from '../../action/Introduction';
import {
  SELF_INTRODUCTION,
  STUDY_PLAN,
  SAVE_BOTH,
  SAVE_BOTH_SUCCESS,
  SAVE_BOTH_FAILURE,
  SELF_INTRODUCTION_FAILURE,
  SELF_INTRODUCTION_SUCCESS,
  GET_SELF_INTRODUCTION_FAILURE,
  GET_SELF_INTRODUCTION_SUCCESS,
  STUDY_PLAN_FAILURE,
  STUDY_PLAN_SUCCESS,
  GET_STUDY_PLAN_FAILURE,
  GET_STUDY_PLAN_SUCCESS,
} from '../../action/Introduction/interface';

export const initState: Introduction = {
  selfIntroduction: '',
  studyPlan: '',
  isSuccessSaveSelfIntroduction: undefined,
  isSuccessSaveStudyPlan: undefined,
  isSuccessGetSelfIntroduction: undefined,
  isSuccessGetStudyPlan: undefined,
  isSuccessSaveBoth: undefined,
  error: null,
};

const IntroductionReducer = (
  state: Introduction = initState,
  action: introductionActionType,
): Introduction => {
  switch (action.type) {
    case SELF_INTRODUCTION:
      return {
        ...state,
        selfIntroduction: action.payload,
      };
    case STUDY_PLAN:
      return {
        ...state,
        studyPlan: action.payload,
      };
    case SAVE_BOTH:
      return {
        ...state,
        isSuccessSaveBoth: undefined,
        selfIntroduction: action.payload.selfIntroduction,
        studyPlan: action.payload.studyPlan,
      };
    case SAVE_BOTH_SUCCESS:
      return {
        ...state,
        isSuccessSaveBoth: true,
      };
    case SAVE_BOTH_FAILURE:
      return {
        ...state,
        isSuccessSaveBoth: false,
        error: action.payload,
      };
    case SELF_INTRODUCTION_SUCCESS:
      return {
        ...state,
        isSuccessSaveSelfIntroduction: true,
      };
    case SELF_INTRODUCTION_FAILURE:
      return {
        ...state,
        isSuccessSaveSelfIntroduction: false,
        error: action.payload,
      };
    case GET_SELF_INTRODUCTION_SUCCESS:
      return {
        ...state,
        isSuccessGetSelfIntroduction: true,
        selfIntroduction: action.payload,
      };
    case GET_SELF_INTRODUCTION_FAILURE:
      return {
        ...state,
        isSuccessGetSelfIntroduction: false,
        error: action.payload,
      };
    case STUDY_PLAN_SUCCESS:
      return {
        ...state,
        isSuccessSaveStudyPlan: true,
      };
    case STUDY_PLAN_FAILURE:
      return {
        ...state,
        isSuccessSaveStudyPlan: false,
        error: action.payload,
      };
    case GET_STUDY_PLAN_SUCCESS:
      return {
        ...state,
        isSuccessGetStudyPlan: true,
        studyPlan: action.payload,
      };
    case GET_STUDY_PLAN_FAILURE:
      return {
        ...state,
        isSuccessGetStudyPlan: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default IntroductionReducer;
