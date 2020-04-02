import { fork, all, takeEvery } from 'redux-saga/effects';

export function* loggerSagas(...args) {
  yield console.log(args);
}

export function* logger() {
  yield takeEvery('*', loggerSagas);
}

export default function* rootSaga() {
  yield all([fork(logger)]);
}
