import { call, put, takeEvery, all } from 'redux-saga/effects';
import { getUser, getUserById } from '../api';
import * as userAction from '../action/userActions';
import { actionIds } from '../common';

export function* watchGetUserStart() {
  yield takeEvery(
    actionIds.GET_USER,
    requestGetUsers
  );
  yield takeEvery(
    actionIds.GET_USER_BY_ID,
    requestGetUserById
  );
}

function* requestGetUsers() {
  const { generateUsers } = yield all({
    generateUsers: call(getUser),
  });
  yield put(userAction.getUserSuccessAction(generateUsers));
}

function* requestGetUserById(payload: any) {
  const { payload: id } = payload;
  const { generateUser } = yield all({
    generateUser: call(getUserById, id),
  });
  if (generateUser) {
    yield put(userAction.getUserByIdSuccessAction(generateUser));
  } else {
    yield put(userAction.getUserByIdFailAction())
  }
}