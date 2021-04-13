import {
  PASSWORD,
  NAME,
  signupActionType,
  PHONE_CODE,
  PHONE_NUMBER,
  RULE_CHECK,
  CHECK_VERTIFY_CODE_SUCCESS,
  CHECK_VERTIFY_CODE_FAILURE,
  SEND_VERTIFY_CODE_SUCCESS,
  SEND_VERTIFY_CODE_FAILURE,
} from '../../action/signup';
import ISignUpState from './interface';

const initState: ISignUpState = {
  password: '',
  name: '',
  phoneCode: '',
  phoneNumber: '',
  ruleCheck: false,
  checkVertifyCode: false,
  sendvertifyCode: false,
  error: null,
};

const SignUpReducer = (state: ISignUpState = initState, action: signupActionType): ISignUpState => {
  switch (action.type) {
    case NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case PHONE_CODE: {
      return {
        ...state,
        phoneCode: action.payload,
      };
    }
    case PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.payload,
      };
    }
    case RULE_CHECK: {
      return {
        ...state,
        ruleCheck: action.payload,
      };
    }
    case CHECK_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        checkVertifyCode: true,
      };
    }
    case CHECK_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEND_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        sendvertifyCode: true,
      };
    }
    case SEND_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
