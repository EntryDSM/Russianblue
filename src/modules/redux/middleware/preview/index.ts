import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { getPreview, final, getFinalPdf } from '../../../../util/api/preview';
import { GET_PREVIEW, FINAL, FINAL_PDF } from '../../action/preview/interface';
import { takeLatest } from 'redux-saga/effects';

export const previewGetSaga = createRequestSaga(GET_PREVIEW, getPreview);
export const finalSaveSaga = createRequestSaga(FINAL, final);
export const getFinalPdfSaga = createRequestSaga(FINAL_PDF, getFinalPdf);

function* previewSaga() {
  yield takeLatest(GET_PREVIEW, previewGetSaga);
  yield takeLatest(FINAL, finalSaveSaga);
  yield takeLatest(FINAL_PDF, getFinalPdfSaga);
}

export default previewSaga;
