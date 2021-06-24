import createRequestSaga from '../../../../util/saga/createRequestSaga';
import { getSelectType, selectType, autoSaveSelectType } from '../../../../util/api/selectType';
import { AUTOSAVE_SELECTTYPE, GET_SELECTTYPE, SELECTTYPE } from '../../action/selectType/interface';
import { debounce, takeLatest } from 'redux-saga/effects';

export const selectTypeRequestSaga = createRequestSaga(SELECTTYPE, selectType);
export const getSelectTypeRequestSaga = createRequestSaga(GET_SELECTTYPE, getSelectType);
export const autoSaveSelectTypeRequestSaga = createRequestSaga(
  AUTOSAVE_SELECTTYPE,
  autoSaveSelectType,
);

function* selectTypeSaga() {
  yield takeLatest(SELECTTYPE, selectTypeRequestSaga);
  yield takeLatest(GET_SELECTTYPE, getSelectTypeRequestSaga);
  yield debounce(3000, AUTOSAVE_SELECTTYPE, autoSaveSelectTypeRequestSaga);
}

export default selectTypeSaga;
