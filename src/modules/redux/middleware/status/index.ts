import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { getStatus } from '../../../../util/api/status';
import { GET_STATUS } from '../../action/status/interface';

export const getUserSaga = createRequestSaga(GET_STATUS, getStatus);

function* userSaga() {
  takeLatest(GET_STATUS, getUserSaga);
}

export default userSaga;
