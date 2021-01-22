import userReducer from './user';
import modalReducer from './modal';
import statusReducer from './status';
import signupReducer from './signup';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  status: statusReducer,
  signup: signupReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
