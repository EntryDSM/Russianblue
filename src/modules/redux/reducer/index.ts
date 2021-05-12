import { combineReducers } from 'redux';
import userReducer from './user';
import modalReducer from './modal';
import statusReducer from './status';
import signupReducer from './signup';
import signinReducer from './signin';
import resetPasswordReducer from './resetPassword';
import authReducer from './auth';
import introductionReducer from './Introduction';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  status: statusReducer,
  signup: signupReducer,
  signin: signinReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  introduce: introductionReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
