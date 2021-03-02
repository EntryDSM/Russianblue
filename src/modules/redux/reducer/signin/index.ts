import { ID, PASSWORD, signinActionType } from '../../action/signin';
import ISignInState from './interface';

const initState: ISignInState = {
  id: '',
  password: '',
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
    default: {
      return state;
    }
  }
};

export default SignInState;
