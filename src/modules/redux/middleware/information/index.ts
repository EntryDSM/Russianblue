import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  information,
  informationImage,
  getInformation,
  autoSaveInformation,
  searchSchool,
} from '../../../../util/api/information';
import {
  AUTOSAVE_INFORMATION,
  GET_INFORMATION,
  INFORMATION,
  INFORMATION_IMAGE,
  SEARCH_SCHOOL,
} from '../../action/information/interface';
import { debounce, takeLatest } from 'redux-saga/effects';

export const informationRequestSaga = createRequestSaga(INFORMATION, information);
export const getSelectTypeRequestSaga = createRequestSaga(GET_INFORMATION, getInformation);
export const autoSaveInformationRequestSaga = createRequestSaga(
  AUTOSAVE_INFORMATION,
  autoSaveInformation,
);
export const informationImageRequestSaga = createRequestSaga(INFORMATION_IMAGE, informationImage);
export const searchSchoolRequestSaga = createRequestSaga(SEARCH_SCHOOL, searchSchool);

function* informationSaga() {
  yield takeLatest(INFORMATION, informationRequestSaga);
  yield takeLatest(GET_INFORMATION, getSelectTypeRequestSaga);
  yield takeLatest(INFORMATION_IMAGE, informationImageRequestSaga);
  yield takeLatest(SEARCH_SCHOOL, searchSchoolRequestSaga);
  yield debounce(3000, AUTOSAVE_INFORMATION, autoSaveInformationRequestSaga);
}

export default informationSaga;