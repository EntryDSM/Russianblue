import { call, put } from 'redux-saga/effects';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any) {
    const accessToken = localStorage.getItem('access_token');
    try {
      const response = yield call(request, accessToken, action.payload);
      yield put({
        type: SUCCESS,
        payload: response ? response.data : null,
      });
    } catch (e) {
      if (e.response?.data) {
        yield put({
          type: FAILURE,
          payload: { ...e.response.data, type },
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
}
