import { all, fork } from 'redux-saga/effects';
import { watchGetPostStart } from './post.saga';
import { watchGetUserStart } from './user.saga';

export const rootSaga = function* root() {
  yield all([fork(watchGetUserStart)]);
  yield all([fork(watchGetPostStart)]);
};