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
  isAdmissionFeePayed: false,
  isReceiveMail: false,
  studyPlanLength: 0,
  selfIntroduceLength: 0,
  error: null,
};

const userReducer = (state: IUserState = InitState, action: userActionType): IUserState => {
  switch (action.type) {
    case PHONE_NUMBER: {
      return { ...state, phoneNumber: action.payload };
    }
    case NAME: {
      return { ...state, name: action.payload };
    }
    case IS_ADMISSION_FEE_PAYED: {
      return { ...state, isAdmissionFeePayed: action.payload };
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
        phoneNumber: action.payload.phone_number,
        name: action.payload.name,
        isfinalSubmitDone: action.payload.is_submit,
        isAdmissionFeePayed: action.payload.is_paid,
        isReceiveMail: action.payload.is_printed_arrived,
        studyPlanLength: parseInt(action.payload.study_plan),
        selfIntroduceLength: parseInt(action.payload.self_introduce),
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
