import { IResetPasswordState } from './interface';
import {
  NEW_PASSWORD,
  resetPasswordActionType,
  VERTIFY_CODE,
  VERTIFY_PHONE_NUMBER,
} from '../../action/resetPassword';
import {
  CHECK_VERTIFY_CODE_FAILURE,
  CHECK_VERTIFY_CODE_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_STATE,
  SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE,
  SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS,
} from '../../action/resetPassword/interface';

const initState: IResetPasswordState = {
  vertifyCode: '',
  vertifyPhoneNumber: '',
  newPassword: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
  vertifyCodeChecked: false,
  vertifyCodeSend: false,
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
    case SEND_RESET_PASSWORD_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEND_RESET_PASSWORD_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        vertifyCodeSend: true,
      };
    }
    case CHECK_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CHECK_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        vertifyCodeChecked: true,
      };
    }
    case RESET_STATE: {
      return {
        ...state,
        vertifyCodeChecked: false,
        vertifyCodeSend: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default resetPasswordReducer;
