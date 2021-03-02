import { IResetPasswordState } from './interface';
import {
  NEW_PASSWORD,
  resetPasswordActionType,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
} from '../../action/resetPassword';
import { RESET_PASSWORD_ERROR } from '../../action/resetPassword/interface';
const initState: IResetPasswordState = {
  vertifyCode: '',
  vertifyPhoneNumber: '',
  newPassword: '',
  error: '',
};

const resetPasswordReducer = (
  state: IResetPasswordState = initState,
  action: resetPasswordActionType,
): IResetPasswordState => {
  switch (action.type) {
    case VERTIFY_CODE: {
      return {
        ...state,
        vertifyCode: action.payload,
      };
    }
    case VERTIFY_PHONE_NUMBER: {
      return {
        ...state,
        vertifyPhoneNumber: action.payload,
      };
    }
    case NEW_PASSWORD: {
      return {
        ...state,
        newPassword: action.payload,
      };
    }
    case RESET_PASSWORD_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default resetPasswordReducer;
