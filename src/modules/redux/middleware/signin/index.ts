import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { SIGNIN } from '../../action/signin';
import { signin } from '../../../../util/api/signin';

export const siginRequestSaga = createRequestSaga(SIGNIN, signin);

function* signinSaga() {
  takeLatest(SIGNIN, siginRequestSaga);
}

export default signinSaga;
