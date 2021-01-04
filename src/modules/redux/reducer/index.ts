import userReducer from './user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
