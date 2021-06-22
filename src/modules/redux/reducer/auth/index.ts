import IAuthState from './interface';
import { ACCESS_TOKEN, authActionType, IS_LOGIN } from '../../action/auth';
const initState: IAuthState = {
  isLogin: localStorage.getItem('access_token') ? true : false,
  accessToken: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const ModalReducer = (state: IAuthState = initState, action: authActionType) => {
  switch (action.type) {
    case ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    case IS_LOGIN: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default ModalReducer;
