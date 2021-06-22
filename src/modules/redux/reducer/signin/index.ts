import {
  ERROR,
  ID,
  PASSWORD,
  signinActionType,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
} from '../../action/signin';
import ISignInState from './interface';

const initState: ISignInState = {
  id: '',
  password: '',
  error: 0,
};

const SignInState = (state: ISignInState = initState, action: signinActionType) => {
  switch (action.type) {
    case ID: {
      return {
        ...state,
        id: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SIGNIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SIGNIN_SUCCESS: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default SignInState;
