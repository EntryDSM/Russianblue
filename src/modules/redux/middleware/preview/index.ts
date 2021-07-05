import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { getPreview } from '../../../../util/api/preview';
import { GET_PREVIEW } from '../../action/preview/interface';
import { takeLatest } from 'redux-saga/effects';

export const previewGetSaga = createRequestSaga(GET_PREVIEW, getPreview);

function* previewSaga() {
  yield takeLatest(GET_PREVIEW, previewGetSaga);
}

export default previewSaga;
