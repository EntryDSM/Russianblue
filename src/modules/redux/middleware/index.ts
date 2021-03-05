import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';

export default function* rootSaga() {
  yield all([status, user]);
}
