import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';
import signin from './signin';
import signup from './signup';
import introductionSaga from './introduction';

export default function* rootSaga() {
  yield all([status(), user(), signin(), signup(), introductionSaga()]);
}
