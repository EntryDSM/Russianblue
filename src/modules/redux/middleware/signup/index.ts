import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  signup,
  sendSignUpVertifyCode,
  sendResetPasswordVertifyCode,
  chekckVertifyCode,
} from '../../../../util/api/signup';
import { CHECK_VERTIFY_CODE, SEND_VERTIFY_CODE, SIGNUP } from '../../action/signup';
import { SEND_RESET_PASSWORD_VERTIFY_CODE } from '../../action/resetPassword/interface';

export const sigupRequestSaga = createRequestSaga(SIGNUP, signup);
export const sendSignupVertifyCodeSaga = createRequestSaga(
  SEND_VERTIFY_CODE,
  sendSignUpVertifyCode,
);
export const checkVertifyCodeSaga = createRequestSaga(CHECK_VERTIFY_CODE, chekckVertifyCode);
export const sendResetPasswordVertifyCodeSaga = createRequestSaga(
  SEND_RESET_PASSWORD_VERTIFY_CODE,
  sendResetPasswordVertifyCode,
);

function* signinSaga() {
  yield takeLatest(SIGNUP, sigupRequestSaga);
  takeLatest(SEND_VERTIFY_CODE, sendSignupVertifyCodeSaga);
  takeLatest(CHECK_VERTIFY_CODE, checkVertifyCodeSaga);
  takeLatest(SEND_RESET_PASSWORD_VERTIFY_CODE, sendResetPasswordVertifyCodeSaga);
}

export default signinSaga;
