import { fork, all, takeEvery } from 'redux-saga/effects';

export function* sagaIsRuning(...args) {
  yield console.log('redux-saga is running!');
}

export function* loggerSaga() {
  yield takeEvery('SAGA_IS_RUNNING', sagaIsRuning);
}

export default function* rootSaga() {
  yield all([fork(loggerSaga)]);
}
