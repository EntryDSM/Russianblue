import userReducer from './user';
import modalReducer from './modal';
import statusReducer from './status';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  status: statusReducer,
});

export default rootReducer;
