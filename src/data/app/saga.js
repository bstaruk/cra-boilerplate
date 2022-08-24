import { all, put, takeLatest } from 'redux-saga/effects';

import { actions } from './slice';

export function* setCountSaga({ payload }) {
  console.log('setCountSaga', payload);
  yield put(actions.setCountSuccess(payload));
}

export function* appSaga() {
  yield all([
    takeLatest(actions.setCount.type, setCountSaga),
  ]);
}
