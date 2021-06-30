import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  information,
  informationImage,
  getInformation,
  autoSaveInformation,
  searchSchool,
  gedInformation,
  getGedInformation,
  autoSaveGedInformation,
} from '../../../../util/api/information';
import {
  AUTOSAVE_INFORMATION,
  GET_INFORMATION,
  INFORMATION,
  INFORMATION_IMAGE,
  SEARCH_SCHOOL,
  GEDINFORMATION,
  GET_GEDINFORMATION,
  AUTOSAVE_GEDINFORMATION,
} from '../../action/information/interface';
import { debounce, takeLatest } from 'redux-saga/effects';

export const informationRequestSaga = createRequestSaga(INFORMATION, information);
export const getInformationRequestSaga = createRequestSaga(GET_INFORMATION, getInformation);
export const autoSaveInformationRequestSaga = createRequestSaga(
  AUTOSAVE_INFORMATION,
  autoSaveInformation,
);
export const informationImageRequestSaga = createRequestSaga(INFORMATION_IMAGE, informationImage);
export const searchSchoolRequestSaga = createRequestSaga(SEARCH_SCHOOL, searchSchool);
export const gedInformationRequestSaga = createRequestSaga(GEDINFORMATION, gedInformation);
export const getGedInformationRequestSaga = createRequestSaga(
  GET_GEDINFORMATION,
  getGedInformation,
);
export const autoSaveGedInformationRequestSaga = createRequestSaga(
  AUTOSAVE_GEDINFORMATION,
  autoSaveGedInformation,
);

function* informationSaga() {
  yield takeLatest(INFORMATION, informationRequestSaga);
  yield takeLatest(GET_INFORMATION, getInformationRequestSaga);
  yield takeLatest(INFORMATION_IMAGE, informationImageRequestSaga);
  yield takeLatest(SEARCH_SCHOOL, searchSchoolRequestSaga);
  yield takeLatest(GEDINFORMATION, gedInformationRequestSaga);
  yield takeLatest(GET_GEDINFORMATION, getGedInformationRequestSaga);
  yield debounce(3000, AUTOSAVE_GEDINFORMATION, autoSaveGedInformationRequestSaga);
  yield debounce(3000, AUTOSAVE_INFORMATION, autoSaveInformationRequestSaga);
}

export default informationSaga;
