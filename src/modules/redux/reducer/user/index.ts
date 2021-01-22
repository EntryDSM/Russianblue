import IUserState from './interface';
import { NAME, PHONE_NUMBER, userActionType } from '../../action/user';

const InitState: IUserState = {
  phoneNumber: '',
  name: '',
};

const userReducer = (state: IUserState = InitState, action: userActionType): IUserState => {
  switch (action.type) {
    case PHONE_NUMBER: {
      return { ...state, phoneNumber: action.payload };
    }
    case NAME: {
      return { ...state, name: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
