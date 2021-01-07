import { call, put } from 'redux-saga/effects';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any) {
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      if (e.response?.data) {
        yield put({
          type: FAILURE,
          payload: e.response.data,
        });
      } else {
        yield put({
          type: FAILURE,
          payload: {
            message: `TypeError: Cannot read property 'data' of undefined`,
            status: 500,
          },
        });
      }
    }
  };
}
