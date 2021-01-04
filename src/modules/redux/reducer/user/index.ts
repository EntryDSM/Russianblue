import IUserState from './interface';
import { PHONE_NUMBER, userActionType } from '../../action/user';

const InitState: IUserState = {
  phoneNumber: '',
  password: '',
  name: '',
};

const userReducer = (action: userActionType, state: IUserState = InitState): IUserState => {
  switch (action.type) {
    case PHONE_NUMBER: {
      return { ...state, phoneNumber: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
