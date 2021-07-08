import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';
import signin from './signin';
import signup from './signup';
import introductionSaga from './introduction';
import resetPasswordSaga from './resetPassword';
import selectTypeSaga from './selectType';
import informationSaga from './information';
import gradeSaga from './grade';
import previewSaga from './preview';

export default function* rootSaga() {
  yield all([
    status(),
    user(),
    signin(),
    signup(),
    introductionSaga(),
    selectTypeSaga(),
    resetPasswordSaga(),
    informationSaga(),
    gradeSaga(),
    previewSaga(),
  ]);
}
