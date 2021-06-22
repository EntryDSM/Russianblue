import { debounce, takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  GET_SELF_INTRODUCTION,
  GET_STUDY_PLAN,
  SELF_INTRODUCTION,
  STUDY_PLAN,
  SAVE_BOTH,
} from '../../action/Introduction/interface';
import {
  introduction,
  studyPlan,
  getIntroduction,
  getStudyPlan,
  saveBoth,
} from '../../../../util/api/introduction';

export const introductionRequestSaga = createRequestSaga(SELF_INTRODUCTION, introduction);
export const studyPlanRequestSaga = createRequestSaga(STUDY_PLAN, studyPlan);
export const getIntroductionRequestSaga = createRequestSaga(GET_SELF_INTRODUCTION, getIntroduction);
export const getStudyPlanRequestSaga = createRequestSaga(GET_STUDY_PLAN, getStudyPlan);
export const saveIntroductionAndStudyPlanRequestSaga = createRequestSaga(SAVE_BOTH, saveBoth);

function* introductionSaga() {
  yield debounce(3000, SELF_INTRODUCTION, introductionRequestSaga);
  yield debounce(3000, STUDY_PLAN, studyPlanRequestSaga);
  yield takeLatest(GET_SELF_INTRODUCTION, getIntroductionRequestSaga);
  yield takeLatest(GET_STUDY_PLAN, getStudyPlanRequestSaga);
  yield takeLatest(SAVE_BOTH, saveIntroductionAndStudyPlanRequestSaga);
}

export default introductionSaga;
