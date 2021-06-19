import Introduction from './interface';
import { introductionActionType } from '../../action/Introduction';
import {
  SET_SELF_INTRODUCTION,
  SET_STUDY_PLAN,
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
};

const IntroductionReducer = (
  state: Introduction = initState,
  action: introductionActionType,
): Introduction => {
  switch (action.type) {
    case SET_SELF_INTRODUCTION:
      return {
        ...state,
        selfIntroduction: action.payload,
      };
    case SET_STUDY_PLAN:
      return {
        ...state,
        studyPlan: action.payload,
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
      };
    default: {
      return state;
    }
  }
};

export default IntroductionReducer;
