import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getPostById } from '../api';
import * as postAction from '../action/postActions';
import { actionIds, BaseAction } from '../common';

export function* watchGetPostStart() {
  yield takeEvery(
    actionIds.GET_POST_BY_USER,
    requestGetPost
  );
}

function* requestGetPost(payload: BaseAction) {
  const {payload: userId} = payload;
  const { generatePost } = yield all({
    generatePost: call(getPostById, userId),
  });
  yield put(postAction.getPostByUserSuccessAction(generatePost));
}