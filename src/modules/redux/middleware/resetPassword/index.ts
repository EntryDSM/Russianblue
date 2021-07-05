import { takeLatest } from 'redux-saga/effects';
import {
  chekckVertifyCode,
  resetPassword,
  sendResetPasswordVertifyCode,
} from '../../../../util/api/signup';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  CHECK_VERTIFY_CODE,
  RESET_PASSWORD,
  SEND_RESET_PASSWORD_VERTIFY_CODE,
} from '../../action/resetPassword/interface';

const resetPasswordSendVertifyCodeSaga = createRequestSaga(
  SEND_RESET_PASSWORD_VERTIFY_CODE,
  sendResetPasswordVertifyCode,
);
const checkVertifyCodeSaga = createRequestSaga(CHECK_VERTIFY_CODE, chekckVertifyCode);
const resetPasswordRequestSaga = createRequestSaga(RESET_PASSWORD, resetPassword);

function* resetPasswordSaga() {
  yield takeLatest(SEND_RESET_PASSWORD_VERTIFY_CODE, resetPasswordSendVertifyCodeSaga);
  yield takeLatest(CHECK_VERTIFY_CODE, checkVertifyCodeSaga);
  yield takeLatest(RESET_PASSWORD, resetPasswordRequestSaga);
}

export default resetPasswordSaga;
