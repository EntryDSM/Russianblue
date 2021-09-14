import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  getSelectType,
  selectType,
  selectTypeStateToRequest,
} from '../../../../util/api/selectType';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_YEAR,
  GRADUATION_MONTH,
  REMARK,
  HEADCOUNT,
  GET_SELECTTYPE,
  SELECTTYPE,
} from '../../action/selectType/interface';
import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';

const actionArray = [
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_YEAR,
  GRADUATION_MONTH,
  REMARK,
  HEADCOUNT,
];

const getStateFunc = (state: reducerType): reducerType['selectType'] => state.selectType;
export const getSelectTypeRequestSaga = createRequestSaga(GET_SELECTTYPE, getSelectType);

export const selectTypeSaveSaga = function* () {
  const SUCCESS = 'SELECTTYPE/SELECTTYPE_SUCCESS';
  const FAILURE = 'SELECTTYPE/SELECTTYPE_FAILURE';
  const state = yield select(getStateFunc);
  const request = selectTypeStateToRequest(state);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(selectType, accessToken, request);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'SELECTTYPE/SELECTTYPE' },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

function* selectTypeSaga() {
  yield takeLatest(SELECTTYPE, selectTypeSaveSaga);
  yield takeLatest(GET_SELECTTYPE, getSelectTypeRequestSaga);
  yield debounce(3000, actionArray, selectTypeSaveSaga);
}

export default selectTypeSaga;
