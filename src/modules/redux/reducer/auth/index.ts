import { modalActionType, MODAL_OFF, MODAL_ON } from '../../action/modal';
import IAuthState from './interface';
import { ACCESS_TOKEN, authActionType } from '../../action/auth';
const initState: IAuthState = {
  accessToken: '',
};

const ModalReducer = (state: IAuthState = initState, action: authActionType) => {
  switch (action.type) {
    case ACCESS_TOKEN: {
      return {
        ...state,
        accessToken: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default ModalReducer;
