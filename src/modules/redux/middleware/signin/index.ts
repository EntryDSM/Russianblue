import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { GET_STATUS } from '../../action/status/interface';
import { SIGNIN } from '../../action/signin';
import { signin } from '../../../../util/api/signin';

export const siginRequestSaga = createRequestSaga(SIGNIN, signin);

function* signinSaga() {
  takeLatest(GET_STATUS, siginRequestSaga);
}

export default signinSaga;
