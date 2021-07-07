import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { getPreview, final } from '../../../../util/api/preview';
import { GET_PREVIEW, FINAL } from '../../action/preview/interface';
import { takeLatest } from 'redux-saga/effects';

export const previewGetSaga = createRequestSaga(GET_PREVIEW, getPreview);
export const finalSaveSaga = createRequestSaga(FINAL, final);

function* previewSaga() {
  yield takeLatest(GET_PREVIEW, previewGetSaga);
  yield takeLatest(FINAL, finalSaveSaga);
}

export default previewSaga;
