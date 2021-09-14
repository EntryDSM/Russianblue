import IUserState from './interface';
import { NAME, PHONE_NUMBER, userActionType } from '../../action/user';
import {
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
  IS_ADMISSION_FEE_PAYED,
  IS_FINAL_SUBMIT_DONE,
  IS_RECEIVE_MAIL,
  SELF_INTRODUCE_LENGTH,
  STUDY_PLAN_LENGTH,
} from '../../action/user/interface';

const InitState: IUserState = {
  phoneNumber: '',
  name: '',
  isfinalSubmitDone: false,
  isReceiveMail: false,
  studyPlanLength: 0,
  selfIntroduceLength: 0,
  applicationType: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const userReducer = (state: IUserState = InitState, action: userActionType): IUserState => {
  switch (action.type) {
    case PHONE_NUMBER: {
      return { ...state, phoneNumber: action.payload };
    }
    case NAME: {
      return { ...state, name: action.payload };
    }
    case IS_FINAL_SUBMIT_DONE: {
      return { ...state, isfinalSubmitDone: action.payload };
    }
    case IS_RECEIVE_MAIL: {
      return {
        ...state,
        isReceiveMail: action.payload,
      };
    }
    case SELF_INTRODUCE_LENGTH: {
      return {
        ...state,
        selfIntroduceLength: action.payload,
      };
    }
    case STUDY_PLAN_LENGTH: {
      return {
        ...state,
        studyPlanLength: action.payload,
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        phoneNumber: action.payload.phoneNumber,
        name: action.payload.name,
        isfinalSubmitDone: action.payload.isfinalSubmitDone,
        isReceiveMail: action.payload.isReceiveMail,
        studyPlanLength: action.payload.studyPlanLength,
        selfIntroduceLength: action.payload.selfIntroduceLength,
        applicationType: action.payload.applicationType,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
