import {
  PASSWORD,
  NAME,
  signupActionType,
  PHONE_CODE,
  PHONE_NUMBER,
  RULE_CHECK,
} from '../../action/signup';
import ISignUpState from './interface';

const initState: ISignUpState = {
  password: '',
  name: '',
  phoneCode: '',
  phoneNumber: '',
  ruleCheck: false,
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
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
