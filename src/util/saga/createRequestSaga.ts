import { call, put, select } from 'redux-saga/effects';
import { reducerType } from 'src/modules/redux/reducer';

export default function createRequestSaga(type: any, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any) {
    const accessToken = yield select((rootReducer: reducerType) => rootReducer.auth.accessToken);
    try {
      const response = yield call(request, accessToken, action.payload);
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
            message: `Network Error`,
            status: 500,
          },
        });
      }
    }
  };
}
