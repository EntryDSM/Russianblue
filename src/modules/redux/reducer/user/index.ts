import IUserState from './interface';
import { NAME, PHONE_NUMBER, userActionType } from '../../action/user';
import {
  IS_ADMISSION_FEE_PAYED,
  IS_FINAL_SUBMIT_DONE,
  IS_RECEIVE_MAIL,
} from '../../action/user/interface';

const InitState: IUserState = {
  phoneNumber: '',
  name: '',
  isfinalSubmitDone: false,
  isAdmissionFeePayed: false,
  isReceiveMail: false,
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
    default: {
      return state;
    }
  }
};

export default userReducer;
