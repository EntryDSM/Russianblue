import { combineReducers } from 'redux';
import userReducer from './user';
import modalReducer from './modal';
import statusReducer from './status';
import signupReducer from './signup';
import signinReducer from './signin';
import resetPasswordReducer from './resetPassword';
import authReducer from './auth';
import selectTypeReducer from './selectType';
import introductionReducer from './Introduction';
import informationReducer from './information';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  status: statusReducer,
  signup: signupReducer,
  signin: signinReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  selectType: selectTypeReducer,
  introduce: introductionReducer,
  information: informationReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
