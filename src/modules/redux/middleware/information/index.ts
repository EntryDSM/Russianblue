import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  informationStateToRequest,
  information,
  graduateInformationStateToRequest,
  graduateInformation,
  getInformation,
  getGraduateInformation,
  userPhoto,
  getSearchSchool,
  gedScore,
  getGedScore,
} from '../../../../util/api/information';
import {
  INFORMATION,
  INPUT,
  SEX,
  BIRTHYEAR,
  BIRTHMONTH,
  BIRTHDATE,
  SCHOOLCODE,
  ADDRESS_AND_CODE,
  GET_INFORMATION,
  GET_GRADUATE_INFORMATION,
  GRADUATE_INFORMATION,
  USER_PICTURE,
  SEARCH_SCHOOL,
  GET_GED_SCORE,
  GED_SCORE,
} from '../../action/information/interface';
import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';

const actionArray = [INPUT, SEX, BIRTHYEAR, BIRTHMONTH, BIRTHDATE, ADDRESS_AND_CODE, SCHOOLCODE];

const getStateFunc = (state: reducerType): reducerType['information'] => state.information;
const getSelectTypeStateFunc = (state: reducerType): reducerType['selectType'] => state.selectType;

export const informationGetSaga = createRequestSaga(GET_INFORMATION, getInformation);
export const graduateInformationGetSaga = createRequestSaga(
  GET_GRADUATE_INFORMATION,
  getGraduateInformation,
);
export const userPhotoSaveSaga = createRequestSaga(USER_PICTURE, userPhoto);
export const searchSchoolGetSaga = createRequestSaga(SEARCH_SCHOOL, getSearchSchool);
export const gedScoreGetSaga = createRequestSaga(GET_GED_SCORE, getGedScore);

const informationSaveSaga = function* () {
  const SUCCESS = 'INFORMATION/INFORMATION_SUCCESS';
  const FAILURE = 'INFORMATION/INFORMATION_FAILURE';
  const state = yield select(getStateFunc);
  const request = informationStateToRequest(state);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(information, accessToken, request);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'INFORMATION/INFORMATION' },
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

const graduateInformationSaveSaga = function* () {
  const SUCCESS = 'INFORMATION/GRADUATE_INFORMATION_SUCCESS';
  const FAILURE = 'INFORMATION/GRADUATE_INFORMATION_FAILURE';
  const state = yield select(getStateFunc);
  const request = graduateInformationStateToRequest(state);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(graduateInformation, accessToken, request);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'INFORMATION/GRADUATE_INFORMATION' },
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

const proxySaga = function* () {
  const state = yield select(getSelectTypeStateFunc);
  yield call(informationSaveSaga);
  if (state.educationalStatus !== 'QUALIFICATION_EXAM') {
    yield call(graduateInformationSaveSaga);
  }
};

const gedScoreSaveSaga = function* () {
  const SUCCESS = 'INFORMATION/GED_SCORE_SUCCESS';
  const FAILURE = 'INFORMATION/GED_SCORE_FAILURE';
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response = yield call(gedScore, accessToken, state.totalScore);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'INFORMATION/GED_SCORE' },
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

function* informationSaga() {
  yield takeLatest(INFORMATION, informationSaveSaga);
  yield takeLatest(GET_INFORMATION, informationGetSaga);
  yield takeLatest(GRADUATE_INFORMATION, graduateInformationSaveSaga);
  yield takeLatest(GET_GRADUATE_INFORMATION, graduateInformationGetSaga);
  yield takeLatest(USER_PICTURE, userPhotoSaveSaga);
  yield takeLatest(SEARCH_SCHOOL, searchSchoolGetSaga);
  yield takeLatest(GET_GED_SCORE, gedScoreGetSaga);
  yield debounce(2000, GED_SCORE, gedScoreSaveSaga);
  yield debounce(3000, actionArray, proxySaga);
}

export default informationSaga;
