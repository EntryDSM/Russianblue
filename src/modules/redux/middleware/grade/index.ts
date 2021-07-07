import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { GET_GRADE, SAVE_GRADE, GRADE, INPUT } from '../../action/grade/interface';
import { grade, gradeStateToRequest, getGrade } from '../../../../util/api/grade';
import { reducerType } from '../../reducer';
import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';

const getStateFunc = (state: reducerType): reducerType['grade'] => state.grade;
const actionArray = [GRADE, INPUT];

export const gradeGetSaga = createRequestSaga(GET_GRADE, getGrade);

const gradeSaveSaga = function* () {
  const SUCCESS = 'GRADE/SAVE_GRADE_SUCCESS';
  const FAILURE = 'GRADE/SAVE_GRADE_FAILURE';
  const state = yield select(getStateFunc);
  const request = gradeStateToRequest(state);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(grade, accessToken, request);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'GRADE/SAVE_GRADE' },
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

function* gradeSaga() {
  yield takeLatest(SAVE_GRADE, gradeSaveSaga);
  yield takeLatest(GET_GRADE, gradeGetSaga);
  yield debounce(3000, actionArray, gradeSaveSaga);
}

export default gradeSaga;
