import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';
import signin from './signin';

export default function* rootSaga() {
  yield all([status, user, signin]);
}
