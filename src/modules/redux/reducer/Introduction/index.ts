import IIntroduction from './interface';
import { SELF_INTRODUCTION, STUDY_PLAN, introductionActionType } from '../../action/Introduction';

export const initState: IIntroduction = {
    selfIntroduction: '',
    studyPlan: '',
}

const IntroductionReducer = (state: IIntroduction = initState, action: introductionActionType) => {
  switch (action.type) {
    case SELF_INTRODUCTION: {
      return {
        ...state,
        selfIntroduction: action.payload,
      };
    }
    case STUDY_PLAN: {
      return {
        ...state,
        studyPlan: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default IntroductionReducer;