import { call, put, takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  signup,
  sendSignUpVertifyCode,
  sendResetPasswordVertifyCode,
  chekckVertifyCode,
} from '../../../../util/api/signup';
import { CHECK_VERTIFY_CODE, SEND_VERTIFY_CODE, SIGNUP } from '../../action/signup';
import { SEND_RESET_PASSWORD_VERTIFY_CODE } from '../../action/resetPassword/interface';

export const sigupRequestSaga = function* (action: any) {
  const callback = () => (window.location.href = '/');
  const FAILURE = `${SIGNUP}_FAILURE`;
  const SUCCESS = `${SIGNUP}_SUCCESS`;
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(signup, accessToken, action.payload);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    yield call(callback);
  } catch (e) {
    if (e.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...e.response.data, type: SIGNUP },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

export const sendSignupVertifyCodeSaga = createRequestSaga(
  SEND_VERTIFY_CODE,
  sendSignUpVertifyCode,
);
export const checkVertifyCodeSaga = createRequestSaga(CHECK_VERTIFY_CODE, chekckVertifyCode);

function* signinSaga() {
  yield takeLatest(SIGNUP, sigupRequestSaga);
  yield takeLatest(SEND_VERTIFY_CODE, sendSignupVertifyCodeSaga);
  yield takeLatest(CHECK_VERTIFY_CODE, checkVertifyCodeSaga);
}

export default signinSaga;
