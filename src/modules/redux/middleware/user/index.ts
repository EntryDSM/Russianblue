import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { GET_USER } from '../../action/user';
import { getUser } from '../../../../util/api/user';

export const getUserSaga = createRequestSaga(GET_USER, getUser);

function* userSaga() {
  takeLatest(GET_USER, getUserSaga);
}

export default userSaga;
